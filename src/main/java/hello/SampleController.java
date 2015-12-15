package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by NicholasG on 14.12.2015.
 */

@Controller
@EnableAutoConfiguration
public class SampleController {

    @RequestMapping(value = "/")
    @ResponseBody
    String home() {
        return "<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head lang=\"en\">\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Test</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<h1>Hello World!</h1>\n" +
                "</body>\n" +
                "</html>";
    }

    public static void main(String[] args) {
        SpringApplication.run(SampleController.class, args);
    }

}
