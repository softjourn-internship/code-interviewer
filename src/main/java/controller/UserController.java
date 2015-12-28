package controller;

import jpa.entity.User;
import jpa.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import service.UserService;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by NicholasG on 25.12.2015.
 */
// api
@RestController
public class UserController {

    private final Logger log = LoggerFactory.getLogger(UserController.class);

    @Inject
    private UserService userService;

    @RequestMapping("/users/")
    public @ResponseBody List<User> getAllUsers() {
        System.err.println("AAAAAAAAAAAAAAAAAAAAAAA");
        log.info("Get list of users");
        return userService.getAll();
    }

}
