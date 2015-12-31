/**
 * Created by Iwan on 25.12.2015.
 */
package configuration;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.h2.tools.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@Profile("h2")
@Configuration
public class H2_DataSource {


    @Bean
    public DataSource dataSource() {

        EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
        EmbeddedDatabase db = builder.setType(EmbeddedDatabaseType.H2).addScript("/code-interviewer-create-data-base.sql").addScript("/code-interviewer-data-intitialization.sql").build();
        return db;

    }


    @Bean(initMethod = "start", destroyMethod = "stop")
    public Server startDBManager() throws SQLException {
        return Server.createWebServer();
    }

}