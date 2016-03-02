package com.codeinterviewer.user.controller;

import com.code.reviewer.Application;
import com.code.reviewer.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by NicholasG on 18.02.2016.
 */
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
public class UserControllerTest {

    @Autowired
    private UserService userService;

    private MockMvc mockMvc;

    @BeforeTest
    public void init() {
//        new File("C:\\Users\\yar65\\Desktop\\test\\code-interviewer\\src\\main\\webapp\\dist\\images\\profiles\\er.png");
    }

    @Test
    public void testChangeProfileImage() throws IOException {
        RestTemplate template = new TestRestTemplate();
//        System.out.println(template.getForEntity("http://localhost:8080/user", String.class).getBody());
        Map<String, File> fileMap = new HashMap<>();
        Map<String, String> idMap = new HashMap<>();

        idMap.put("id", "2");
        File file = new File("C:\\Users\\yar65\\Desktop\\test\\code-interviewer\\src\\main\\webapp\\dist\\images\\profiles\\er.png");
        fileMap.put("image", file);

        System.out.println(template.postForEntity("http://localhost:8080/user/1/profileImage", null, String.class, idMap, fileMap).getBody());
        System.out.println();
    }
}
