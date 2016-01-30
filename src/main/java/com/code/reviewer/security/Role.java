package com.code.reviewer.security;

/**
 * Created by NicholasG on 30.01.2016.
 */
public enum Role {

    ADMIN("ROLE_ADMIN"),
    MANAGER("ROLE_MANAGER"),
    RECRUITER("ROLE_RECRUITER"),
    REVIEWER("ROLE_REVIEWER"),
    INTERVIEWER("ROLE_INTERVIEWER"),
    PARTICIPANT("ROLE_PARTICIPANT");

    private final String role;

    Role(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return role;
    }
}
