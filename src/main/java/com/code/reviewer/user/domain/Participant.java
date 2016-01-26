package com.code.reviewer.user.domain;


import javax.persistence.*;
import javax.swing.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.CascadeType.ALL;

/**
 * Created by Iwan on 10.01.2016.
 */
@Entity
@Table(name = "participants")
public class Participant implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "city")
    private String city;

    @Column(name = "speciality")
    private String speciality;

    @Column(name = "englishLevel")
    private String englishLevel;

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

    @Column(name = "background")
    private ImageIcon background;

    @ManyToMany(targetEntity = User.class, mappedBy = "participants")
    private Set<User> users = new HashSet<>();

    @OneToMany(targetEntity = Activity.class, cascade = ALL, mappedBy = "participant")
    private Set<Activity> activity = new HashSet<>();

    public Participant() {

    }

    public Participant(
            String firstName,
            String lastName,
            String city,
            String speciality,
            String englishLevel,
            String email
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.speciality = speciality;
        this.englishLevel = englishLevel;
        this.email = email;
    }

    public Participant(
            String firstName,
            String lastName,
            String city,
            String speciality,
            String englishLevel,
            String email,
            ImageIcon image,
            ImageIcon background
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.speciality = speciality;
        this.englishLevel = englishLevel;
        this.email = email;
        this.image = image;
        this.background = background;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getEnglishLevel() {
        return englishLevel;
    }

    public void setEnglishLevel(String englishLevel) {
        this.englishLevel = englishLevel;
    }

    public ImageIcon getBackground() {
        return background;
    }

    public void setBackground(ImageIcon background) {
        this.background = background;
    }

    public Set<Activity> getActivity() {
        return activity;
    }

    public void setActivity(Set<Activity> activity) {
        this.activity = activity;
    }

    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", sent='" + sent + '\'' +
                ", returned='" + returned + '\'' +
                ", taken=" + taken +
                '}';
    }

}