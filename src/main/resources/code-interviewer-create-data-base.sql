DROP TABLE IF EXISTS users;
CREATE TABLE users (
  username  VARCHAR(50) PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(45),
  lastName  VARCHAR(45),
  email     VARCHAR(45),
  password  VARCHAR(45),
  role      VARCHAR(45),
  isActive  BOOLEAN
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  taskId     INTEGER PRIMARY KEY AUTO_INCREMENT,
  title      VARCHAR(50),
  task       LONGTEXT,
  technology VARCHAR(20),
  difficulty VARCHAR(10),
  addedDate  DATE,
  isActive   BOOLEAN
);



