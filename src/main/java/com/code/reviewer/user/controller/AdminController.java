package com.code.reviewer.user.controller;

import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by NicholasG on 03.01.2016.
 */
@RestController
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RequestMapping("/admin")
public class AdminController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    @Qualifier(value = "userService")
    private UserService service;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)

    public Collection<User> getAllUsers() {
        return service.getAll();
    }


    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public void addUser(
            @RequestParam String firstName,
            @RequestParam String lastName,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String role
    ) {
        User user = new User(firstName, lastName, email, password, role);
        service.save(user);
        LOGGER.info("User '" + firstName + ' ' + lastName + "' has been added");

    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable Integer id) {
        return service.findOne(id);
    }

    @RequestMapping(value = "/del/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@RequestParam Integer id) {
        User user = service.findOne(id);
        user.setIsActive(false);
        service.save(user);
        LOGGER.info("User '" + user.getFirstName() + ' ' + user.getLastName() + "' has been deactivated");
    }
}
