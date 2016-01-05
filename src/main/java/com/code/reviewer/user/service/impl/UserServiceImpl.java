package com.code.reviewer.user.service.impl;

import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.repository.UserRepository;
import com.code.reviewer.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Iwan on 23.12.2015.
 */
@Component("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User findOne(Integer id) {
        return userRepository.findOne(id);
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

}
