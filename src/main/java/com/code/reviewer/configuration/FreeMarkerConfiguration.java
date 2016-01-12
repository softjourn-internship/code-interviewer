package com.code.reviewer.configuration;

import org.springframework.context.annotation.Bean;
import freemarker.template.Configuration;
import freemarker.template.TemplateExceptionHandler;

import java.io.File;

/**
 * Created by Yurii on 12.01.2016.
 */
@org.springframework.context.annotation.Configuration
public class FreeMarkerConfiguration {
    public void freeMarkerCfg() {
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_21);

        try {
            cfg.setDirectoryForTemplateLoading(new File("/resources/mails"));
        } catch (Exception e) {
            e.printStackTrace();
        }
        cfg.setDefaultEncoding("UTF-8");
        cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);

    }

}
