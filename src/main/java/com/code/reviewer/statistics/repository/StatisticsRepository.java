package com.code.reviewer.statistics.repository;

import com.code.reviewer.tasks.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Created by Iwan on 13.02.2016.
 */
public interface StatisticsRepository extends JpaRepository<Task, Long>{

    @Query("select count(*) from Task u where u.technology = :technology")
    int find(@Param("technology") String technology);
}
