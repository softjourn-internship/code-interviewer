CREATE DATABASE code_interviewer;

USE code_interviewer;

CREATE TABLE users (
  userId    INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(45),
  lastName  VARCHAR(45),
  email     VARCHAR(45)
);

CREATE TABLE tasks (
  taskId     INTEGER PRIMARY KEY AUTO_INCREMENT,
  title      VARCHAR(50),
  task       LONGTEXT,
  technology VARCHAR(20),
  difficulty VARCHAR(10),
  addedDate  DATE
);

