package com.code.reviewer.tasks.service;

import com.code.reviewer.tasks.domain.Task;

import java.util.Set;

/**
 * Created by Iwan on 11.02.2016.
 */
public interface TaskGeneratorService {

    Set<Task> generateThreeTasksByDifficultyAndTechnology(String difficulty, String technology);
}
