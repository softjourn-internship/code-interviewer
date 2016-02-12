package com.code.reviewer.test.repository;

import com.code.reviewer.test.domain.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 26.01.2016.
 */
public interface ExamRepository extends JpaRepository<Exam, Long> {

}
