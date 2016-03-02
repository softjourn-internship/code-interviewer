package com.code.reviewer.tasks.repository;

import com.code.reviewer.tasks.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;

/**
 * Created by Iwan on 31.12.2015.
 */
public interface TaskRepository extends JpaRepository<Task, Long> {

    Task findOne(Long id);

    Task findOneByTitle(String title);

    @Query("select  t  from Task t where t.difficulty = :difficulty and t.technology = :technology order by rand() ")
    Set<Task> findTaskByUser(@Param("difficulty") String difficulty, @Param("technology") String technology);

}
