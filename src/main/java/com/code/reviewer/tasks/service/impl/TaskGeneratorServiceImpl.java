package com.code.reviewer.tasks.service.impl;

import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.tasks.service.TaskGeneratorService;
import com.code.reviewer.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Random;
import java.util.Set;

/**
 * Created by Iwan on 11.02.2016.
 */
@Component("taskGeneratorService")
public class TaskGeneratorServiceImpl implements TaskGeneratorService {

    @Autowired
    @Qualifier(value = "taskService")
    private TaskService taskService;

    private Long randomNumber;
    private Set<Task> setTask;
    private Random random = new Random();
    private Integer minValue = 1;
    private Integer countTests = 3;
    private Task task;

    @Override
    public Set<Task> generateThreeTasksByDifficultyAndTechnology(String difficulty, String technology) {
        setTask = new LinkedHashSet<Task>();
       while(true) {
           task = null;
           if(setTask.size() == countTests) break;
             randomNumber = getRandomNumber();
             task = taskService.findById(randomNumber);
               if((task.getDifficulty().equals(difficulty)) && (task.getTechnology().equals(technology))) {
                   if(withoutRepetitions())  setTask.add(task);
                   else continue;
               }
           else continue;
        }
        return setTask;
    }

    private Long getRandomNumber() {
        return minValue + (long)(random.nextDouble()*(taskService.getCountRow() - minValue));
    }

    private boolean withoutRepetitions () {
        int count = 0;
        for(Iterator iterator = setTask.iterator(); iterator.hasNext(); ){
            Task newTask = (Task)iterator.next();
            if(task.getId() != newTask.getId()) count += 1;
            else continue;
        }
        if(count == setTask.size()) return true;
        else return false;
    }
}
