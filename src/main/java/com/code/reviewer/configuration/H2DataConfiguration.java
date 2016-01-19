package com.code.reviewer.configuration;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.stereotype.Component;


/**
 * Created by Iwan on 06.01.2016.
 */
@Component
@Profile("dev")
public class H2DataConfiguration implements ApplicationListener<ContextRefreshedEvent> {

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("code-interviewer-data-initialization.sql")
                .build();

        ComboPooledDataSource cpds = new ComboPooledDataSource();
        cpds.setJdbcUrl("jdbc:h2:mem:testdb");
        cpds.setUser("sa");
        cpds.setPassword("");
        cpds.setMaxPoolSize(15);
        cpds.setMaxIdleTime(100);
        cpds.setAcquireRetryAttempts(1);
        cpds.setNumHelperThreads(3);
    }
}
