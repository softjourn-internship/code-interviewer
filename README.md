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

### commands for create user
   create user "codeinterviewer"@"localhost" identified by "codeinterviewer";
   grant all on . to "codeinterviewer"@"localhost"

### commands for create a database in MySql
   create database codereviewer;

### using prod profile for run an application:
   1. Please open a terminal
   2. Write to him following commands:
      mvn clean package (#Enter)
      -java jar target/code-reviewer.war --spring.profiles.active=prod (#Enter)



