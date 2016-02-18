package com.codeinterviewer.user.service;

import com.code.reviewer.user.service.UserService;
import com.code.reviewer.user.service.impl.UserServiceImpl;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.File;
import java.io.IOException;

/**
 * Created by NicholasG on 18.02.2016.
 */
public class TestUserService {

    private UserService userService;

    @BeforeTest
    public void init() {
        userService = new UserServiceImpl();
    }

    @Test
    public void doTest() throws IOException {
        userService.changeProfileImage(1L, new File("image.jpg"));
    }
}
