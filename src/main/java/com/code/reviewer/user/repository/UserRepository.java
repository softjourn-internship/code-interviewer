package com.code.reviewer.user.repository;

import com.code.reviewer.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 17.12.2015.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    User findOneByUserId(Long id);

    User findOneByUsername(String username);

    User findOneByEmail(String email);

}
