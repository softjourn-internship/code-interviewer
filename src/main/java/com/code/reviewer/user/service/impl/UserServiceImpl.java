package com.code.reviewer.user.service.impl;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.security.SecurityUtils;
import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.repository.UserRepository;
import com.code.reviewer.user.service.UserService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
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
    public User findOne(Long id) {
        return userRepository.findOne(id);
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

    @Override
    public void changeProfileImage(@NotNull Long userId, File image) throws IOException {
        User u = userRepository.findOne(userId);
        String imageString = encodeToString(image);

        u.setImage(imageString);
        save(u);
    }

    @Override
    public void changeBackgroundImage(@NotNull Long userId, File image) throws IOException {
        User u = userRepository.findOne(userId);
        String imageString = encodeToString(image);

        u.setImage(imageString);
        save(u);
    }

    private String encodeToString(File image) throws IOException {
        String imageString;
        FileInputStream imageInFile = new FileInputStream(image);
        byte[] imageData = new byte[(int) image.length()];
        imageInFile.read(imageData);
        imageString = Base64.encodeBase64String(imageData);
        return imageString;
    }

}
