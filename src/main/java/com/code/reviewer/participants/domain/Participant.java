package com.code.reviewer.participants.domain;


import com.code.reviewer.user.domain.User;

import javax.persistence.*;
import javax.swing.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Set;

/**
 * Created by Iwan on 10.01.2016.
 */
@Entity
@Table(name = "participants")
public class Participant implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "participantId")
    private Integer participantId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "sent")
    private Date sent;

    @Column(name = "returned")
    private Date returned;

    @Column(name = "taken")
    private String taken;

    @Column(name = "active")
    private boolean active = true;

    @Column(name = "image")
    private ImageIcon image;

    /*@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "user_participant",
            joinColumns = @JoinColumn(name = "participantId"),
            inverseJoinColumns = @JoinColumn(name = "username"))*/
    @ManyToMany
    @JoinTable(name = "user_participant")
    private Set<User> userSet;

    public Participant() {

    }

    public Participant(String firstName, String lastName, String email, Date sent, Date returned, String taken) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sent = sent;
        this.returned = returned;
        this.taken = taken;
    }

    public Integer getParticipantId() {
        return participantId;
    }

    public void setParticipantId(Integer participantId) {
        this.participantId = participantId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getSent() {
        return sent;
    }

    public void setSent(Date sent) {
        this.sent = sent;
    }

    public Date getReturned() {
        return returned;
    }

    public void setReturned(Date returned) {
        this.returned = returned;
    }

    public String getTaken() {
        return taken;
    }

    public void setTaken(String taken) {
        this.taken = taken;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public ImageIcon getImage() {
        return image;
    }

    public void setImage(ImageIcon image) {
        this.image = image;
    }

    public Set<User> getUserSet() {
        return userSet;
    }

    public void setUserSet(Set<User> userSet) {
        this.userSet = userSet;
    }

    @Override
    public String toString() {
        return "{" +
                "participantId=" + participantId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", sent='" + sent + '\'' +
                ", returned='" + returned + '\'' +
                ", taken=" + taken +
                '}';
    }

}