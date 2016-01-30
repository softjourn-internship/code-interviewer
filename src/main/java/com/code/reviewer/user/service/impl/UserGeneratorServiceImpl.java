package com.code.reviewer.user.service.impl;

import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserGeneratorService;
import com.code.reviewer.user.service.UserService;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.util.HashMap;

/**
 * Created by NicholasG on 28.01.2016.
 */
@Component("userGeneratorService")
public class UserGeneratorServiceImpl implements UserGeneratorService {

    private static final int PASSWORD_LENGTH = 20;
    private static final int USERNAME_LENGTH = 10;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    @Qualifier(value = "userService")
    private UserService userService;

    @Override
    public User generateUser(@NotNull final String role) {
        User user = new User();
        String username = generateUsername(),
                password = generatePassword(),
                encryptedPassword = passwordEncoder.encode(password);

        user.setUsername(username);
        user.setPassword(encryptedPassword);
        user.setRole(role);
        userService.save(user);

        usernameAndPasswordMap.put(username, password);

        return user;
    }

    @Override
    public synchronized String generateUsername() {
        return RandomStringUtils.randomAlphabetic(USERNAME_LENGTH);
    }

    @Override
    public synchronized String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(PASSWORD_LENGTH);
    }

    @Override
    public HashMap<String, String> getUsernameAndPasswordMap() {
        return usernameAndPasswordMap;
    }

}
