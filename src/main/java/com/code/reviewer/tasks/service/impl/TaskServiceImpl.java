package com.code.reviewer.tasks.service.impl;

import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.tasks.repository.TaskRepository;
import com.code.reviewer.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.Collection;
import java.util.Set;

/**
 * Created by NicholasG on 08.01.2016.
 */
@Component("taskService")
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository repository;

    @Override
    public Collection<Task> getAll() {
        return repository.findAll();
    }

    @Override
    public Task findById(Long id) {
        return repository.findOne(id);
    }

    @Override
    public Task findByTaskTitle(String title) {
        return repository.findOneByTitle(title);
    }

    @Override
    public Set<Task> findTaskByUser(String difficulty, String technology) {
        return repository.findTaskByUser(difficulty, technology);
    }

    @Override
    public Long getCountRow() {
        return repository.count();
    }

    @Override
    public void save(Task task) {
        repository.save(task);
    }

    @Override
    public void delete(Task task) {
        repository.delete(task);
    }
}
