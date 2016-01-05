package com.code.reviewer.tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.code.reviewer.tasks.domain.Task;

/**
 * Created by NicholasG on 31.12.2015.
 */
public interface TaskRepository extends JpaRepository<Task, Integer> {

}
