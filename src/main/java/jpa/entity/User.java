package jpa.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by NicholasG on 17.12.2015.
 */
// Додати enumRoles
@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsers", nullable = false)
    private Integer userID;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "firstName", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

    public User() {

    }

    public User(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
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

    @Override
    public String toString() {
        return userID + ":" + firstName + ":" + lastName + ":" + email;
    }
}
