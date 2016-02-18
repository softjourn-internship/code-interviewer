package com.code.reviewer.test.controller;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.participant.service.ParticipantService;
import com.code.reviewer.security.Role;
import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.tasks.service.TaskService;
import com.code.reviewer.test.domain.Test;
import com.code.reviewer.test.service.TestService;
import com.code.reviewer.user.domain.User;
import com.code.reviewer.user.service.UserGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashSet;
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
    @Qualifier(value = "taskService")
    private TaskService taskService;

    @Autowired
    @Qualifier(value = "testService")
    private TestService testService;

    private int start = 0;

    @RequestMapping(value = "/schedule",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Test schedule(
            @RequestParam("id") Long id,
            @RequestParam("difficulty") String difficulty,
            @RequestParam("technology") String technology
    ) {
        Participant participant = participantService.findOne(id);
        User user = userGeneratorService.generateUser(Role.PARTICIPANT);
        user.setFirstName(participant.getFirstName());
        user.setLastName(participant.getLastName());
        user.setEmail(participant.getEmail());
        Set<Task> demoTaskList = taskService.findTasksByUser(difficulty, technology);
        Set<Task> taskList = new LinkedHashSet<Task>();
        for (Task task : demoTaskList) {
            if (start == 3) break;
            taskList.add(task);
            start++;
        }
        Test test = new Test(user, participant, taskList);
        testService.save(test);
        return test;
    }
}
