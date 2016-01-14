DROP TABLE IF EXISTS users;
CREATE TABLE users (
  username   VARCHAR(50) PRIMARY KEY,
  firstName  VARCHAR(45),
  lastName   VARCHAR(45),
  email      VARCHAR(45),
  password   VARCHAR(255),
  role       VARCHAR(45),
  active     BOOLEAN,
  image      CHAR,
  background CHAR
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  taskId     INTEGER PRIMARY KEY AUTO_INCREMENT,
  title      VARCHAR(50),
  task       LONGTEXT,
  technology VARCHAR(20),
  difficulty VARCHAR(10),
  addedDate  DATE,
  active     BOOLEAN
);

DROP TABLE IF EXISTS participants;
CREATE TABLE participants (
  participantId INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstName     VARCHAR(45),
  lastName      VARCHAR(45),
  email         VARCHAR(45),
  sent          DATE,
  returned      DATE,
  taken         VARCHAR(10),
  active        BOOLEAN,
  image         CHAR
);

DROP TABLE IF EXISTS user_participant;
CREATE TABLE user_participant (
  username      VARCHAR(50),
  participantId INTEGER
);