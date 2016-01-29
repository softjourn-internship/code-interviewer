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

/**
 * Created by NicholasG on 28.01.2016.
 */
@Component("userGeneratorService")
public class UserGeneratorServiceImpl implements UserGeneratorService {

    private static final int LENGTH = 20;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    @Qualifier(value = "userService")
    private UserService userService;

    @Override
    public User generateUser(@NotNull final String role) {
        User user = new User();
        String username = generateUsername();
        String encryptedPassword = passwordEncoder.encode(generatePassword());

        user.setUsername(username);
        user.setPassword(encryptedPassword);
        user.setRole(role);
        userService.save(user);

        return user;
    }

    @Override
    public String generateUsername() {
        return RandomStringUtils.randomAlphabetic(LENGTH);
    }

    @Override
    public String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(LENGTH);
    }

}
