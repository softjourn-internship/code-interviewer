package com.code.reviewer.tasks.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by NicholasG on 31.12.2015.
 */
@Entity
@Table(name = "tasks")
public class Task implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "taskId")
    private Integer taskId;

    @Column(name = "title")
    private String title;

    @Column(name = "task")
    private String task;

    @Column(name = "technology")
    private String technology;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "addedDate")
    private Date addedDate;

    @Column(name = "active")
    private boolean active = true;

    public Task() {
    }

    public Task(String title, String task, String technology, String difficulty, Date addedDate, boolean active) {
        this.title = title;
        this.task = task;
        this.technology = technology;
        this.difficulty = difficulty;
        this.addedDate = addedDate;
        this.active = active;
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", title='" + title + '\'' +
                ", task='" + task + '\'' +
                ", technology='" + technology + '\'' +
                ", difficulty='" + difficulty + '\'' +
                ", addedDate=" + addedDate +
                ", active=" + active +
                '}';
    }

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getTechnology() {
        return technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}