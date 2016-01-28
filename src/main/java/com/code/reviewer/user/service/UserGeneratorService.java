package com.code.reviewer.user.service;

import com.code.reviewer.user.domain.User;

/**
 * Created by NicholasG on 28.01.2016.
 */
public interface UserGeneratorService {

    public User generateUser(final String role);

    public String generatePassword();

    public String generateUsername();

}
