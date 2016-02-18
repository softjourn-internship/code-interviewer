package com.codeinterviewer;

import com.code.reviewer.mailing.service.MailService;
import com.code.reviewer.mailing.service.impl.MailServiceImpl;
import com.code.reviewer.user.domain.User;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.IOException;

/**
 * Created by Yurii on 18.02.2016.
 */
public class MailTest {

    private MailService mailService;
    User me = new User(
            "dem1yurma",
            "Yuriy",
            "Demkiv",
            "dem1yurma@gmail.com",
            "1234",
            "manager");

    @BeforeTest
    public void beforeMethod() throws IOException {
        mailService= new MailServiceImpl();

    }

    @Test
    public void testing() throws IOException {
        mailService.sendInviteEmail(me , "u wot m8");
    }

}
