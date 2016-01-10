package com.code.reviewer.user.domain;

import com.code.reviewer.participants.domain.Participant;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

/**
 * Created by NicholasG on 17.12.2015.
 */
@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @Size(min = 5, max = 50)
    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "isActive", nullable = false)
    private boolean isActive;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "recruiter")
    private List<Participant> participantList;

    public User() {

    }

    public User(String firstName, String lastName, String email, String password, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    @Override
    public String toString() {
        return "{" +
                "username=" + username +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                ", isActive=" + isActive +
                '}';
    }
}
