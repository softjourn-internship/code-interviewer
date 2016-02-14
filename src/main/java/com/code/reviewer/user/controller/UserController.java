package com.code.reviewer.user.controller;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserGeneratorService;
import com.code.reviewer.user.service.UserService;
import com.code.reviewer.web.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Set;

/**
 * Created by NicholasG on 03.01.2016.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    @Qualifier("userService")
    private UserService userService;

    @Autowired
    @Qualifier("userGeneratorService")
    private UserGeneratorService userGeneratorService;

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAll());
    }

    @RequestMapping(
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addUser(@RequestBody User user) {
        if (userService.findOneByUsername(user.getUsername()) != null) {
            LOGGER.warn("Username '{}' already in use!", user.getUsername());
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("user-management", "userexists", "Username already in use"))
                    .body(null);
        } else if (userService.findOneByEmail(user.getEmail()) != null) {
            LOGGER.warn("Email '{}' already in use!", user.getEmail());
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("user-management", "emailexists", "Email already in use"))
                    .body(null);
        } else {
            userService.save(user);
            LOGGER.info("User '{}' has been added", user.getUsername());
            return ResponseEntity.ok().build();
        }
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User existingUser = userService.findOneByEmail(user.getEmail());
        if (existingUser != null && !existingUser.getId().equals(user.getId())) {
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("user-management", "emailexists", "Email already in use"))
                    .body(null);
        }
        existingUser = userService.findOneByUsername(user.getUsername());
        if (existingUser != null && !existingUser.getId().equals(user.getId())) {
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("user-management", "userexists", "Username already in use"))
                    .body(null);
        }
        userService.save(user);
        return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert("user", user.getUsername()))
                .body(userService.findOne(user.getId()));
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteUser(@RequestParam("id") Long id) {
        User user = userService.findOne(id);
        if (user == null) {
            LOGGER.warn("User 'id={}' not found!", id);
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("user-management", "usernotfound", "User not found"))
                    .body(null);
        } else {
            user.setActive(false);
            userService.save(user);
            LOGGER.info("User '{}' has been deactivated.", user.getUsername());
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createAlert("user-namagement.deleted", id.toString()))
                    .build();
        }
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
        User user = userService.findOne(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/restore/{id}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> restoreUser(@PathVariable Long id) {
        User user = userService.findOne(id);
        if (user == null) {
            LOGGER.warn("User 'id={}' not found!", id);
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("user-management", "usernotfound", "User not found"))
                    .body(null);
        } else {
            user.setActive(true);
            userService.save(user);
            LOGGER.info("User '{}' has been deactivated.", user.getUsername());
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createAlert("user-namagement.restored", user.getUsername()))
                    .build();
        }
    }

    @RequestMapping(value = "/current",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getCurrentLogin() {
        return ResponseEntity.ok(userService.getCurrentUser());
    }

    @RequestMapping(value = "/participants",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Set<Participant>> getParticipants() {
        return ResponseEntity.ok(userService.getCurrentUser().getParticipants());
    }

}
