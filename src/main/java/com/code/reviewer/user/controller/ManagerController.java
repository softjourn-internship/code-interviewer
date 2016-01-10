package com.code.reviewer.user.controller;

import com.code.reviewer.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by NicholasG on 03.01.2016.
 */
@RestController
@Secured("ROLE_MANAGER")
@RequestMapping("/management")
public class ManagerController {

    @Autowired
    @Qualifier("taskService")
    private TaskService service;



}
