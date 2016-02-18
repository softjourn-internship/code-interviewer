package com.code.reviewer.mailing.service;

import com.code.reviewer.user.domain.User;

/**
 * Created by Yurii on 18.02.2016.
 */
public interface MailService {

    void sendInviteEmail(User user, String baseUrl);

    void sendAddingUserEmail(User user, String baseUrl);

    void sendReviewerMail(User user, String baseUrl);

}
