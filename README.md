# code-interviewer

### Purpose:
***************************************************

This project is a platform for making online interview with writing a code.

### Environment configuration:
***************************************************

1. JDK:  java SE 1.8.

2. Maven: apache-maven-3.3.9.

3. SQL Server: MySQL Server 5.5.

4. Install Node.js

5. In the project directory, use "npm start"

### Run server:
***************************************************

   Use mvn spring-boot:run

### Home page:
***************************************************

   http://localhost:8080/

### Log in with:
***************************************************
   Role           Username       Password

   ADMIN          admin          admin
   MANAGER        manager        manager
   RECRUITER      recruiter      recruiter
   REVIEWER       reviewer       reviewer
   INTERVIEWER    interviewer    interviewer

### using prod profile for run an application:
 1. Please open a terminal
 2. Write to him following commands:
    mvn clean package (#Enter)
    -java jar target/code-reviewer.war --spring.profiles.active=prod (#Enter)

## commands for create a database in MySql
 create database codereviewer;
 use codereviewer;
 DROP TABLE IF EXISTS users;
 CREATE TABLE users (
   user_id    INTEGER PRIMARY KEY AUTO_INCREMENT,
   username varchar(45),
   first_name VARCHAR(45),
   last_name  VARCHAR(45),
   email     VARCHAR(45),
   password  VARCHAR(45),
   role      VARCHAR(45),
   active  BOOLEAN,
   image  longblob,
   background longblob
 );

 DROP TABLE IF EXISTS tasks;
 CREATE TABLE tasks (
   task_id     INTEGER PRIMARY KEY AUTO_INCREMENT,
   title      VARCHAR(50),
   task       LONGTEXT,
   technology VARCHAR(20),
   difficulty VARCHAR(10),
   added_date  DATE,
   active   BOOLEAN
 );

 DROP TABLE IF EXISTS participants;
 CREATE TABLE participants (
   participant_id     INTEGER PRIMARY KEY AUTO_INCREMENT,
   first_name      VARCHAR(50),
   last_name       LONGTEXT,
   email VARCHAR(20),
   sent DATE,
   returned  DATE,
   taken   VARCHAR(45),
   active boolean,
   image longblob
 );

 drop table if exists users_participants;
 create table users_participants(
 user_id integer,
 participant_id integer
 );

 ALTER TABLE users_participants
 ADD  FOREIGN KEY (users_id) REFERENCES users (user_iD);

 ALTER TABLE users_participants
 ADD  FOREIGN KEY (participants_id) REFERENCES participants (participant_id);

