package com.code.reviewer.tasks.service;

import com.code.reviewer.tasks.domain.Task;

import java.util.Collection;
import java.util.Set;

/**
 * Created by NicholasG on 08.01.2016.
 */
public interface TaskService {

    Collection<Task> getAll();

    Task findById(Long id);

    Task findByTaskTitle(String title);

    Long getCountRow();

    Set<Task> findTasksByUser(String difficulty, String technology);

    void save(Task task);

    void delete(Task task);
}
