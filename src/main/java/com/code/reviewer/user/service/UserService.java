package com.code.reviewer.user.service;

import com.code.reviewer.user.domain.Participant;
import com.code.reviewer.user.domain.User;

import java.util.Collection;

/**
 * Created by Iwan on 23.12.2015.
 */
public interface UserService {

    Collection<User> getAll();

    User findOneByUserId(Long id);

    User findOneByUsername(String username);

    User findOneByEmail(String email);

    void save(User user);

    Collection<Participant> getParticipants(String username);

    User getCurrentUser();
}
