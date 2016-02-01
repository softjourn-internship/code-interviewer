package com.code.reviewer.tasks.controller;


import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.tasks.service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by Iwan on 28.01.2016.
 */
@RestController
@RequestMapping("/api2")
public class taskController {
    private static final Logger LOGGER = LoggerFactory.getLogger(taskController.class);

    @Autowired
    @Qualifier(value = "taskService")
    private TaskService taskService;

    @RequestMapping(value = "/tasks",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Task> getAllTask() {
        return taskService.getAll();
    }

    @RequestMapping(value = "/tasks/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Task getTaskById(@PathVariable Integer id) {
        return taskService.findById(id);
    }

    @RequestMapping(value = "/tasks",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Task addTask(@RequestBody Task task) {
        if (taskService.findByTaskTitle(task.getTitle()) != null) {
            LOGGER.warn("title '" + task.getTitle() + "' already in use!");
            return null;
        } else {
            taskService.save(task);
            LOGGER.info("Task '" + task.getTitle() + "' has been added");
            return task;
        }
    }

    @RequestMapping(value = "/tasks",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public Task updateTask(@RequestBody Task task) {
        taskService.save(task);
        return task;
    }

    @RequestMapping(value = "/tasks",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Task deleteTask(@PathVariable Integer id) {
        Task task = taskService.findById(id);
        if(task == null) {
            LOGGER.warn("Task '" + task.getTitle() + "' is not found!");
            return null;
        } else {
            task.setActive(false);
            taskService.save(task);
            LOGGER.info("Task '" + task.getTitle() + "' has been deactivated!");
            return task;
        }
    }
}
