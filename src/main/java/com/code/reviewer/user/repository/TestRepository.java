package com.code.reviewer.user.repository;

import com.code.reviewer.user.domain.Test;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 28.01.2016.
 */
public interface TestRepository extends JpaRepository<Test, Long> {
}
