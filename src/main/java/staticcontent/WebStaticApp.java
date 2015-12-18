package staticcontent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

/**
 * Created by NicholasG on 18.12.2015.
 */
@SpringBootApplication
public class WebStaticApp extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(WebStaticApp.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(WebStaticApp.class, args);
    }

}
