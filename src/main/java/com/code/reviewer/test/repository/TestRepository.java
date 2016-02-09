package com.code.reviewer.test.repository;

import com.code.reviewer.test.domain.Test;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 28.01.2016.
 */
public interface TestRepository extends JpaRepository<Test, Long> {
}
