package com.code.reviewer.test.domain;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.tasks.domain.Task;
import com.code.reviewer.user.domain.User;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by NicholasG on 26.01.2016.
 */
@Entity
@Table(name = "tests")
public class Test implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @OneToOne
    @MapsId
    private User user;

    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "participantsId", nullable = false)
    private Participant participant;

    @ManyToMany(targetEntity = Task.class, mappedBy = "tests")
    private Set<Task> tasks = new HashSet<>();

    public Test() {
    }

    public Test(User user, Participant participant, Set<Task> tasks, Date date) {
        this.user = user;
        this.participant = participant;
        this.tasks = tasks;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Participant getParticipant() {
        return participant;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setParticipant(Participant participant) {
        this.participant = participant;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }
}
