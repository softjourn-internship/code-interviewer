package com.code.reviewer.user.service.impl;

import com.code.reviewer.user.domain.Participant;
import com.code.reviewer.security.SecurityUtils;
import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.repository.UserRepository;
import com.code.reviewer.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
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
    public User findOneByUserId(Long id) {
        return userRepository.findOneByUserId(id);
    }

    @Override
    public User findOneByUsername(String username) {
        return userRepository.findOneByUsername(username);
    }

    @Override
    public User findOneByEmail(String email) {
        return userRepository.findOneByEmail(email);
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public Collection<Participant> getParticipants(String username) {
        return userRepository.findOneByUsername(username).getParticipants();
    }

    @Override
    public User getCurrentUser() {
        return findOneByUsername(SecurityUtils.getCurrentUserLogin());
    }

}
