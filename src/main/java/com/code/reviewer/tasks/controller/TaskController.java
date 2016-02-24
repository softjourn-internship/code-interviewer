package com.code.reviewer.tasks.controller;

import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.tasks.service.TaskService;
import com.code.reviewer.web.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collection;
import java.sql.Date;


/**
 * Created by Iwan on 01.02.2016.
 */
@RestController
@RequestMapping("/task")
public class TaskController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    @Qualifier(value = "taskService")
    private TaskService taskService;

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Task>> getAllTasks() {
        return ResponseEntity.ok(taskService.getAll());
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskService.findById(id);
        if (task != null) {
            LOGGER.warn("task id = '" + task.getId() + "' is not found");
            return new ResponseEntity<>(task, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addTask(@RequestBody Task task) {
        if (taskService.findByTaskTitle(task.getTitle()) != null) {
            LOGGER.warn("title '" + task.getTitle() + "' already in use!");
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("task-managament", "taskexists", "Title already in use"))
                    .body(null);
        } else {
            Calendar calendar = Calendar.getInstance();
            Date date = new Date(calendar.getTime().getTime());
            task.setAddedDate(date);
            taskService.save(task);
            LOGGER.info("Task '" + task.getTitle() + "' has been added");
            return ResponseEntity.ok().build();
        }
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Task> updateTask(@RequestBody Task task) {
        taskService.save(task);
        LOGGER.info("task id = '" + task.getId() + "' has been ");
        return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert("task", task.getTitle()))
                .body(taskService.findById(task.getId()));
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        Task task = taskService.findById(id);
        if (task == null) {
            LOGGER.warn("task id = '" + id + "' is not found");
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert("task-management", "tasknotfound", "Task not found"))
                    .body(null);
        } else {
            taskService.delete(task);
            LOGGER.info("task id = '" + id + "' has been deleted");
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createAlert("task-management.deleted", id.toString()))
                    .build();
        }
    }
}
