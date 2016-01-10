package com.code.reviewer.tasks.service;

import com.code.reviewer.tasks.domain.Task;

import java.util.Collection;

/**
 * Created by NicholasG on 08.01.2016.
 */
public interface TaskService {

    Collection<Task> getAll();

    Task findById(Integer id);

    Task findByTaskTitle(String title);

    void save(Task task);

}
