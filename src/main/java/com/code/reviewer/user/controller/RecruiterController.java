package com.code.reviewer.user.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by NicholasG on 03.01.2016.
 */
@RestController
@PreAuthorize("hasRole('ROLE_RECRUITER')")
@RequestMapping("/recruiter")
public class RecruiterController {
}

