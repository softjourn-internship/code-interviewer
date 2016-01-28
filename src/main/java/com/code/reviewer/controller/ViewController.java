package com.code.reviewer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by NicholasG on 28.01.2016.
 */
@Controller
public class ViewController {

    @RequestMapping({
            "/data/**",
            "/statistics/**",
            "/tasks/**"
    })
    public String redirect() {
        return "/";
    }

}
