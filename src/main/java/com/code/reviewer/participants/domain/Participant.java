package com.code.reviewer.participants.domain;


import com.code.reviewer.user.domain.User;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Iwan on 10.01.2016.
 */
@Entity
@Table(name = "participants")
public class Participant implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "participantId", nullable = false)
    private Integer participantID;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "sent")
    private Date sent;

    @Column(name = "returned")
    private Date returned;

    @Column(name = "taken")
    private String taken;

    @ManyToOne(cascade={CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "username")
    private User recruiter;

    public Participant() {

    }

    public Participant (String firstName, String lastName, String email, Date sent, Date returned, String taken, User recruiter) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sent = sent;
        this.returned = returned;
        this.taken = taken;
        this.recruiter = recruiter;
    }

    public Integer getParticipantID() {
        return participantID;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Date getSent() {
        return sent;
    }

    public Date getReturned() {
        return returned;
    }

    public String getTaken() {
        return taken;
    }

    public User getUser() {
        return  recruiter;
    }

    public void setParticipantID( Integer participantID){
        this.participantID = participantID;
    }

    public void setFirstName( String firstName){
        this.firstName = firstName;
    }

    public void setLastName( String lastName){
        this.lastName = lastName;
    }

    public void setEmail( String email){
        this.email = email;
    }

    public void setSent( Date sent){
        this.sent = sent;
    }

    public void setReturned( Date returned){
        this.returned = returned;
    }

    public void setTaken( String taken){
        this.taken = taken;
    }

    public void setUser(User recruiter) {
        this.recruiter = recruiter;
    }

    @Override
    public String toString() {
        return "{" +
                "participantID=" + participantID +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", sent='" + sent + '\'' +
                ", returned='" + returned + '\'' +
                ", taken=" + taken +
                "userFirstName = " + recruiter.getFirstName()+
                "userLastName = " + recruiter.getLastName() +
                '}';
    }

}