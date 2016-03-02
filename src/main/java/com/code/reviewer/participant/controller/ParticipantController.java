package com.code.reviewer.participant.controller;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.participant.service.ParticipantService;
import com.code.reviewer.user.domain.User;
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

import java.sql.Date;
import java.util.Collection;
import java.util.Set;

/**
 * Created by NicholasG on 11.02.2016.
 */
@RestController
@RequestMapping("/participant")
public class ParticipantController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ParticipantController.class);

    @Autowired
    @Qualifier("userService")
    private UserService userService;

    @Autowired
    @Qualifier("participantService")
    private ParticipantService participantService;

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Participant>> getAllParticipants() {
        return ResponseEntity.ok(participantService.getAll());
    }

    @RequestMapping(
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addParticipant(@RequestBody Participant participant) {
        if (participantService.findOneByEmail(participant.getEmail()) != null) {
            LOGGER.warn("Email '{}' already in use!", participant.getEmail());
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("participant-management", "emailexists", "Email already in use"))
                    .body(null);
        } else {
//            User currentUser = userService.getCurrentUser();
//            participant.getUsers().add(currentUser);
//            currentUser.getParticipants().add(participant);
            participantService.save(participant);
            LOGGER.info("Participant '{} {}' has been added", participant.getFirstName(), participant.getLastName());
            return ResponseEntity.ok().build();
        }
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Participant> updateParticipant(@RequestBody Participant participant) {
        Participant existingParticipant = participantService.findOneByEmail(participant.getEmail());
        if (existingParticipant != null && !existingParticipant.getId().equals(participant.getId())) {
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("participant-management", "emailexists", "Email already in use"))
                    .body(null);
        } else {
            participantService.save(participant);
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createEntityUpdateAlert("participant", participant.getEmail()))
                    .body(participantService.findOne(participant.getId()));
        }
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteParticipant(@RequestParam("id") Long id) {
        Participant participant = participantService.findOne(id);
        if (participant == null) {
            LOGGER.warn("Participant 'id={}' not found!", id);
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("participant-management", "participantnotfound", "Participant not found"))
                    .body(null);
        } else {
            participant.setActive(false);
            LOGGER.info("Participant '{} {}' has been deleted", participant.getFirstName(), participant.getLastName());
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createAlert("participant-management.deleted", id.toString()))
                    .build();
        }
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Participant> getParticipant(@PathVariable Long id) {
        Participant participant = participantService.findOne(id);
        if (participant == null) {
            LOGGER.warn("Participant not found!");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            LOGGER.info("Get participant. Id = {}", id);
            return new ResponseEntity<>(participant, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/restore/{id}",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> restoreParticipant(@PathVariable Long id) {
        Participant participant = participantService.findOne(id);
        if (participant == null) {
            LOGGER.warn("Participant 'id={}' not found", id);
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("participan-management", "participantnotfound", "Participant not found"))
                    .body(null);
        } else {
            participant.setActive(true);
            participantService.save(participant);
            LOGGER.info("Participant '{} {}' has been restored", participant.getFirstName(), participant.getLastName());
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createAlert("participant-management.restored", participant.getEmail()))
                    .build();
        }
    }

    @RequestMapping(value = "/sent/{startLimit}/{endLimit}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Set<Participant>> getBySentDate(@PathVariable Date startLimit, @PathVariable Date endLimit) {
        return ResponseEntity.ok(participantService.findBySentDate(startLimit, endLimit));
    }

    @RequestMapping(value = "/firstName/{firstName}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Set<Participant>> getByFirstName(@PathVariable String firstName) {
        firstName += "%";
        return ResponseEntity.ok(participantService.findByFirstName(firstName));
    }

    @RequestMapping(value = "/email/{email}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Set<Participant>> getByEmail(@PathVariable String email) {
        email += "%";
        return ResponseEntity.ok(participantService.findByEmail(email));
    }
}
