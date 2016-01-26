package com.code.reviewer.user.controller;

import com.code.reviewer.user.domain.Participant;
import com.code.reviewer.user.service.ParticipantService;
import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Set;

/**
 * Created by NicholasG on 03.01.2016.
 */
@RestController
@RequestMapping("/api")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    @Qualifier(value = "userService")
    private UserService userService;

    @Autowired
    @Qualifier(value = "participantService")
    private ParticipantService participantService;

    /*<USERS>*/
    @RequestMapping(value = "/users",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<User> getAllUsers() {
        return userService.getAll();
    }

    @RequestMapping(value = "/users",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public User addUser(@RequestBody User user) {
        if (userService.findOneByUsername(user.getUsername()) != null) {
            LOGGER.warn("Username '" + user.getUsername() + "' already in use!");
            return null;
        } else if (userService.findOneByEmail(user.getEmail()) != null) {
            LOGGER.warn("Email '" + user.getEmail() + "' already in use!");
            return null;
        } else {
            userService.save(user);
            LOGGER.info("User '" + user.getUsername() + "' has been added");
            return user;
        }
    }

    @RequestMapping(value = "/users",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public User updateUser(@RequestBody User user) {
        userService.save(user);
        return user;
    }

    @RequestMapping(value = "/users/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable Long id) {
        return userService.findOne(id);
    }

    @RequestMapping(value = "/users/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User deleteUser(@PathVariable Long id) {
        User user = userService.findOne(id);
        if (user == null) {
            LOGGER.warn("User '" + user.getUsername() + "' not found!");
            return null;
        } else {
            user.setActive(false);
            userService.save(user);
            LOGGER.info("User '" + user.getUsername() + "' has been deactivated.");
            return user;
        }
    }

    @RequestMapping(value = "/users/restore/{id}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User restoreUser(@PathVariable Long id) {
        User user = userService.findOne(id);
        if (user != null) {
            user.setActive(true);
            LOGGER.info("User '" + user.getUsername() + "' has been restored.");
            return user;
        } else {
            LOGGER.warn("User not found!");
            return null;
        }
    }

    @RequestMapping(value = "/users/current",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public User getCurrentLogin() {
        return userService.getCurrentUser();
    }

    @RequestMapping(value = "/users/current/participants",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Set<Participant> getParticipants() {
        return userService.getCurrentUser().getParticipants();
    }
    /*</USERS>*/

    /*<PARTICIPANTS>*/
    @RequestMapping(value = "/participants",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Participant> getAllParticipants() {
        return participantService.getAll();
    }

    @RequestMapping(value = "/participants",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Participant addParticipant(@RequestBody Participant participant) {
        if (participantService.findOneByEmail(participant.getEmail()) != null) {
            LOGGER.warn("Email" + participant.getEmail() + " already in use!");
            return null;
        } else {
            User currentUser = userService.getCurrentUser();
            participant.getUsers().add(currentUser);
            currentUser.getParticipants().add(participant);
            participantService.save(participant);
            LOGGER.info("Participant '" + participant.getFirstName() + ' ' + participant.getLastName() + "' has been added");
            return participant;
        }
    }

    @RequestMapping(value = "/participants",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Participant updateParticipant(@RequestBody Participant participant) {
        participantService.save(participant);
        return participant;
    }

    @RequestMapping(value = "/participants/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Participant getParticipant(@PathVariable Long id) {
        Participant participant = participantService.findOne(id);
        if (participant == null) {
            LOGGER.warn("Participant not found!");
            return null;
        } else {
            LOGGER.info("Get participant. Id = " + id);
            return participant;
        }
    }

    @RequestMapping(value = "/participants/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Participant deleteParticipant(@PathVariable Long id) {
        Participant participant = participantService.findOne(id);
        if (participant == null) {
            LOGGER.warn("Participant not found!");
            return null;
        } else {
            participant.setActive(false);
            LOGGER.info("Participant '" + participant.getFirstName() + ' ' + participant.getLastName() + "' has been deleted");
            return participant;
        }
    }
    /*<PARTICIPANTS>*/

}
