package service;

import jpa.entity.User;
import org.springframework.lang.UsesSunHttpServer;

import java.util.List;

/**
 * Created by Iwan on 23.12.2015.
 */
public interface UserService {

  /*  User addUser(User user);
    void delete(Integer userId);
    User getByFirstName(String firstNAme);
    User editUser(User user);*/
    
    List<User> getAll();
}
