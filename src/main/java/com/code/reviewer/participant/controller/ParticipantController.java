package com.code.reviewer.participant.controller;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.participant.service.ParticipantService;
import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;

/**
 * Created by NicholasG on 11.02.2016.
 */
public class ParticipantController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ParticipantController.class);


    @Autowired
    @Qualifier("userService")
    private UserService userService;

    @Autowired
    @Qualifier("participantService")
    private ParticipantService participantService;

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

}
