package com.code.reviewer.user.service;

import com.code.reviewer.user.domain.User;

import java.util.Collection;

/**
 * Created by Iwan on 23.12.2015.
 */
public interface UserService {

    Collection<User> getAll();

    User findOne(Integer id);

    void save(User user);
}
