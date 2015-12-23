package jpa.repository;

import jpa.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 17.12.2015.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

}
