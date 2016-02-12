INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('admin', 'Admin', 'Admin', 'admin@gmail.com', '$2a$10$2NOwmzEu1lsoUGu0WbjQK.ABX79hDHW48REZJPtfbfZV.0G4L7EFy', 'ROLE_ADMIN', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('recruiter', 'Recruiter', 'Recruiter', 'recruiter@gmail.com', '$2a$10$cbQ07GFs3eiPgFrcsGFTIeLzKWPgHymx7nwSOe2PT4LkBXYBO4MeC', 'ROLE_RECRUITER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('manager', 'Manager', 'Manager', 'manager@gmail.com', '$2a$10$7BVJMKB810zhIOj0vQa9HeNsAbs4KXFghL0Pe4ne9FsyRf8jMqkBW', 'ROLE_MANAGER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('reviewer', 'Reviewer', 'Reviewer', 'reviewer@gmail.com', '$2a$10$n.0.3Aw2HMLJc8PLkazaAO3w6snWAUFB88HBJMDa58iWBDa0tsEVO', 'ROLE_REVIEWER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('candidate', 'Candidate', 'Candidate', 'candidate@gmail.com', '$2a$10$QXQ.o8xvlJjyr5OPi83/.uQKrNNMIlRZzurrZHludpsAeMblv/Kc2', 'ROLE_CANDIDATE', TRUE, NULL, NULL);


INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Ivan', 'Karamov', 'adsdasd@gmail.com', '2015-12-25', '2015-12-26', 'done', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Vasya', 'Bimov', 'fsdfdd@gmail.com', '2015-12-04', '2015-12-05', 'done', TRUE, NULL );
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Misha', 'Hoshiy', 'aggggsd@gmail.com', '2015-12-09', '2015-12-10', 'inProcess', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Ihor', 'Wol', 'allsdasd@gmail.com', '2015-12-06', '2015-12-07', 'inProcess', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Nazar', 'Kalyn', 'kalyn_nazar@mail.ru', '2016-01-14', '2016-01-15', 'done', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('John', 'Cena', 'john_c@gmail.com', '2016-01-14', '2016-01-15', 'done', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Vitalik', 'Dudaev', 'macho_men@gmail.com', '2016-01-14', '2016-01-15', 'inProcess', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Igor', 'Gnup', 'cugan_gop@gmail.com', '2016-01-14', '2016-01-15', 'inProcess', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Misha', 'Barhan', 'Mashann_bb@mail.ru', '2016-01-14', '2016-01-15', 'done', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Denus', 'Perepeluca', 'denus_budlo@gmail.com', '2016-01-14', '2016-01-15', 'done', TRUE, NULL);
INSERT INTO participants(first_name, last_name, email, sent, returned, taken, active, image)
    VALUES ('Denus', 'Kaznodiy', 'iDen@mail.ru', '2016-01-14', '2016-01-15', 'done', TRUE, NULL);


INSERT INTO exams(technology, taken, status, complication, participants_id)
    VALUES ('Java', 'failed', 'checked', 'Hard', 1);


INSERT INTO users_participants(users_id, participants_id)
    VALUES(2, 1);
INSERT INTO users_participants(users_id, participants_id)
    VALUES(2, 3);
INSERT INTO users_participants(users_id, participants_id)
    VALUES(2, 8);

INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title1', 'task1', 'tech', 'easy', '2016-01-03');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title2', 'task2', 'tech', 'hard', '2016-01-04');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title3', 'task3', 'java', 'hard', '2016-01-05');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title4', 'task4', 'tech', 'easy', '2016-01-06');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title5', 'task5', 'java', 'hard', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title6', 'task6', 'tech', 'easy', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title7', 'task7', 'tech', 'hard', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title8', 'task8', 'java', 'easy', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title9', 'task9', 'tech', 'hard', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title10', 'task10', 'tech', 'hard', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title11', 'task11', 'java', 'hard', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title12', 'task12', 'tech', 'easy', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title13', 'task13', 'java', 'hard', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title14', 'task14', 'java', 'easy', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title15', 'task15', 'java', 'easy', '2016-01-07');
INSERT INTO tasks(title, task, technology, difficulty, added_date)
    VALUES ('title16', 'task16', 'java', 'easy', '2016-01-07');

