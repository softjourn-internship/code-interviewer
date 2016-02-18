package com.code.reviewer.mailing.service.impl;

/**
 * Created by Yurii on 03.02.2016.
 */

import com.code.reviewer.mailing.service.MailService;
import com.code.reviewer.user.domain.User;
import org.apache.commons.lang.CharEncoding;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import javax.inject.Inject;
import javax.mail.internet.MimeMessage;
import java.util.Locale;

@PropertySource("classpath:application.properties")
public class MailServiceImpl implements MailService {

    @Value("${mail.username}")
    private String username;
    @Value("${mail.password}")
    private String password;
    @Value("${mail.protocol}")
    private String protocol;
    @Value("${mail.host}")
    private String host;
    @Value("${mail.port}")
    private int port;

    private final Logger log = LoggerFactory.getLogger(MailServiceImpl.class);

    @Inject
    private JavaMailSenderImpl javaMailSender;

    @Inject
    private MessageSource messageSource;

    @Inject
    private SpringTemplateEngine templateEngine;


    @Async
    private void sendEmail(String to, String subject, String content, boolean isMultipart, boolean isHtml) {
        log.debug("Send e-mail[multipart '{}' and html '{}'] to '{}' with subject '{}' and content={}",
                isMultipart, isHtml, to, subject, content);

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(host);
        mailSender.setPort(port);
        mailSender.setProtocol(protocol);
        mailSender.setUsername(username);
        mailSender.setPassword(password);

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper message = new MimeMessageHelper(mimeMessage, isMultipart, CharEncoding.UTF_8);
            message.setTo(to);
            message.setFrom("code.interviewer@gmail.com");
            message.setSubject(subject);
            message.setText(content, isHtml);
            javaMailSender.send(mimeMessage);
            log.debug("Sent e-mail to User '{}'", to);
        } catch (Exception e) {
            log.warn("E-mail could not be sent to user '{}', exception is: {}", to, e.getMessage());
        }
    }

    @Async
    public void sendInviteEmail(User user, String baseUrl) {
        log.debug("Sending test invite e-mail to '{}'", user.getEmail());
        Locale locale = Locale.forLanguageTag("en");
        Context context = new Context();
        context.setVariable("user", user);
        context.setVariable("baseUrl", baseUrl);
        String content = templateEngine.process("testInviteEmail", context);
        String subject = messageSource.getMessage("email.invite.subject", null, locale);
        sendEmail(user.getEmail(), subject, content, false, true);
    }

    @Async
    public void sendAddingUserEmail(User user, String baseUrl) {
        log.debug("Sending user adding e-mail to '{}'", user.getEmail());
        Locale locale = Locale.forLanguageTag("en");
        Context context = new Context(locale);
        context.setVariable("user", user);
        context.setVariable("baseUrl", baseUrl);
        String content = templateEngine.process("userAddedEmail", context);
        String subject = messageSource.getMessage("email.added.subject", null, locale);
        sendEmail(user.getEmail(), subject, content, false, true);
    }

    @Async
    public void sendReviewerMail(User user, String baseUrl) {
        log.debug("Sending reviewer check e-mail to '{}'", user.getEmail());
        Locale locale = Locale.forLanguageTag("en");
        Context context = new Context(locale);
        context.setVariable("user", user);
        context.setVariable("baseUrl", baseUrl);
        String content = templateEngine.process("testCompletedEmail", context);
        String subject = messageSource.getMessage("email.review.subject", null, locale);
        sendEmail(user.getEmail(), subject, content, false, true);
    }
}
