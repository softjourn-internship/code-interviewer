package com.code.reviewer.user.service;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.user.domain.User;

import javax.validation.constraints.NotNull;
import java.io.File;
import java.io.IOException;
import java.util.Collection;

/**
 * Created by Iwan on 23.12.2015.
 */
public interface UserService {

    Collection<User> getAll();

    User findOne(Long id);

    User findOneByUsername(String username);

    User findOneByEmail(String email);

    void save(User user);

    Collection<Participant> getParticipants(String username);

    User getCurrentUser();

    void changeProfileImage(@NotNull Long userId, File image) throws IOException;

    void changeBackgroundImage(@NotNull Long userId, File image) throws IOException;
}
