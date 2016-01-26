package com.code.reviewer.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;

/**
 * Created by NicholasG on 26.01.2016.
 */
@Entity
@Table(name = "activity")
public class Activity implements Serializable {

    @Id
    @JsonIgnore
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "technology")
    private String technology;

    @Column(name = "taken")
    private String taken;

    @Column(name = "status")
    private String status;

    @Column(name = "complication")
    private String complication;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "participantsId", nullable = false)
    private Participant participant;

    public Activity() {
    }

    public Activity(String technology, String taken, String status, String complication) {
        this.technology = technology;
        this.taken = taken;
        this.status = status;
        this.complication = complication;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTechnology() {
        return technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public String getTaken() {
        return taken;
    }

    public void setTaken(String taken) {
        this.taken = taken;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getComplication() {
        return complication;
    }

    public void setComplication(String complication) {
        this.complication = complication;
    }

    public Participant getParticipant() {
        return participant;
    }

    public void setParticipant(Participant participant) {
        this.participant = participant;
    }
}
