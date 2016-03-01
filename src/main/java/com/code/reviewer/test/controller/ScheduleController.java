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

import java.sql.Date;
import java.util.ArrayList;
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

    @RequestMapping(value = "/schedule",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Test schedule(
            @RequestParam("id") Long id,
            @RequestParam("difficulty") ArrayList<String> difficulties,
            @RequestParam("technology") String technology,
            @RequestParam("date") Date date
    ) {
        Participant participant = participantService.findOne(id);
        User user = userGeneratorService.generateUser(Role.PARTICIPANT);
        user.setFirstName(participant.getFirstName());
        user.setLastName(participant.getLastName());
        user.setEmail(participant.getEmail());
        Set<Task> tasks = new LinkedHashSet<Task>();
        Set<Task> helpSet = new LinkedHashSet<Task>();
        Task task = new Task();
        for (String tech : difficulties) {
            while (true) {
                helpSet = taskService.findTaskByUser(tech, technology);
                task = getFirstTask(helpSet, task);
                int countNegative = 0;
                countNegative = NoRepeat(tasks, task, countNegative);
                if (countNegative == 1) {
                    continue;
                } else {
                    tasks.add(task);
                    break;
                }
            }
        }
        Test test = new Test(user, participant, tasks, date);
        testService.save(test);
        return test;
    }

    private int NoRepeat(Set<Task> taskList, Task demoTask, int countNegative) {
        for (Task task : taskList) {
            if (demoTask.getId() == task.getId()) {
                countNegative++;
                break;
            }
        }
        return countNegative;
    }

    private Task getFirstTask(Set<Task> setTask, Task demoTask) {
        for (Task task : setTask) {
            demoTask = task;
            break;
        }
        return demoTask;
    }
}

