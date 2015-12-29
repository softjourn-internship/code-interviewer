package java;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Iwan on 26.12.2015.
 */
@RestController
public class UserController {
    @RequestMapping("/hello")
    public String hello() {
        return "Hello Wold!";
    }
}
