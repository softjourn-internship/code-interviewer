package user.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import user.domain.User;
import user.service.UserService;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by NicholasG on 25.12.2015.
 */
@RestController
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Inject
    private UserService userService;

    @RequestMapping("/users/")
    public @ResponseBody List<User> getAllUsers() {
        LOGGER.info("Get list of users");
        return userService.getAll();
    }

}
