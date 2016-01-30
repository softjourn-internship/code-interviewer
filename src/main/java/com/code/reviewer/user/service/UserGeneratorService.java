package com.code.reviewer.user.service;

import com.code.reviewer.user.domain.User;

import java.util.HashMap;

/**
 * Created by NicholasG on 28.01.2016.
 */
public interface UserGeneratorService {

    HashMap<String, String> usernameAndPasswordMap = new HashMap<>();

    User generateUser(final String role);

    String generatePassword();

    String generateUsername();

    HashMap<String, String> getUsernameAndPasswordMap();

}
