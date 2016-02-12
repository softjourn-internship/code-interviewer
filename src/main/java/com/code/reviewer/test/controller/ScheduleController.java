package com.code.reviewer.test.controller;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.participant.service.ParticipantService;
import com.code.reviewer.security.Role;
import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.tasks.service.TaskGeneratorService;
import com.code.reviewer.test.domain.Test;
import com.code.reviewer.test.service.TestService;

import com.code.reviewer.user.domain.User;

import com.code.reviewer.user.service.UserGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

/**
 * Created by Iwan on 10.02.2016.
 */
    @RestController
    @RequestMapping("/test")
    public class ScheduleController {

        @Autowired
        @Qualifier(value = "userGeneratorService")
        private UserGeneratorService userGeneratorService;

        @Autowired
        @Qualifier(value = "participantService")
        private ParticipantService participantService;

        @Autowired
        @Qualifier(value = "taskGeneratorService")
        private TaskGeneratorService taskGeneratorService;

        @Autowired
        @Qualifier(value = "testService")
        private TestService testService;

        @RequestMapping(value = "/schedule", method = RequestMethod.POST)
        public Test schedule(@RequestParam("id") Long id
                ,@RequestParam("difficulty") String difficulty
                ,@RequestParam("technology") String technology) {
            Participant participant = participantService.findOne(id);
            User user = userGeneratorService.generateUser(Role.PARTICIPANT);
            user.setFirstName(participant.getFirstName());
            user.setLastName(participant.getLastName());
            user.setEmail(participant.getEmail());
            Set<Task> taskList = taskGeneratorService.generateThreeTasksByDifficultyAndTechnology(difficulty, technology);
            Test test = new Test(user, participant, taskList);
            testService.save(test);
            return test;
        }
}
