package com.code.reviewer.user.controller;

import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by NicholasG on 03.01.2016.
 */
@RestController
@Secured("ROLE_ADMIN")
@RequestMapping("/admin")
public class AdminController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    @Qualifier(value = "userService")
    private UserService service;

    @RequestMapping(method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<User> getAllUsers() {
        return service.getAll();
    }


    @RequestMapping(value = "/new",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User addUser(@RequestBody User user) {
        if (service.findOneByUsername(user.getUsername()) != null) {
            LOGGER.warn("Username '" + user.getUsername() + "' already in use!");
            return null;
        } else if (service.findOneByEmail(user.getEmail()) != null) {
            LOGGER.warn("Email '" + user.getEmail() + "' already in use!");
            return null;
        } else {
            service.save(user);
            LOGGER.info("User '" + user.getUsername() + "' has been added");
            return user;
        }
    }

    @RequestMapping(value = "/update/{username}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User updateUser(@RequestBody User user) {
        service.save(user);
        return user;
    }

    @RequestMapping(value = "/user/{username}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable String username) {
        return service.findOneByUsername(username);
    }

    @RequestMapping(value = "/del/{username}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteUser(@PathVariable String username) {
        User user = service.findOneByUsername(username);
        user.setIsActive(false);
        service.save(user);
        LOGGER.info("User '" + user.getUsername() + "' has been deactivated.");
    }

    @RequestMapping(value = "restore/{username}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User restoreUser(@PathVariable String username) {
        User deletedUser = service.findOneByUsername(username);
        if (deletedUser != null) {
            deletedUser.setIsActive(true);
            LOGGER.info("User '" + deletedUser.getUsername() + "' has been restored.");
            return deletedUser;
        } else {
            LOGGER.warn("User '" + username + "' is not found!");
            return null;
        }
    }
}
