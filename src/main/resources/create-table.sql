DROP TABLE IF EXISTS users;
CREATE TABLE users (
  username  Varchar(25) PRIMARY KEY,
  firstName VARCHAR(45),
  lastName  VARCHAR(45),
  email     VARCHAR(45),
  password  VARCHAR(45),
  role      VARCHAR(45),
  isActive  BOOLEAN
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  taskId INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  task LONGTEXT,
  technology VARCHAR(20),
  difficulty VARCHAR(10),
  addedDate  DATE,
  isActive BOOLEAN
);

DROP TABLE IF EXISTS participants;
CREATE TABLE participants (
  participantId INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(50),
  lastName  VARCHAR(50),
  email VARCHAR(20),
  sent DATE(10),
  returned  DATE,
  taken VARCHAR(50)
);

Drop table if EXISTS user_participant;
create table user_participant (
  username Varchar(25),
  participantId INTEGER
);