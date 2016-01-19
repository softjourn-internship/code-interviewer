INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('admin', 'Mykola', 'Grynkevych', 'koly@mail.com', 'admin', 'ROLE_ADMIN', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('NicholasG', 'Mykola', 'Grynkevych', 'koly@mail.com', '32342', 'ROLE_MANAGER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('Ivan96A', 'Iwan', 'Arabchuk', 'iwan@gmail.com', '323542', 'ROLE_RECRUITER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('kutsaniuk', 'Dmytro', 'Kutsaniuk', 'dmytro@gmail.com', 'kutsaniuk', 'ROLE_MANAGER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('demy4', 'Yuriy', 'Demkiv', 'yuriy@gmail.com', '32342', 'ROLE_ADMIN', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('andrusyakA', 'Vitaliy', 'Andrusyak', 'vitaliy@gmail.com', '32342', 'ROLE_RECRUITER', TRUE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('Pushkedra', 'Grugoriy', 'Pushkedra', 'grygoriy@gmail.com', '32342', 'ROLE_MANAGER', FALSE, NULL, NULL);
INSERT INTO users(username, first_name, last_name, email, password, role, active, image, background)
    VALUES ('MulaDmytro', 'Dmytro', 'Mula', 'mula@gmail.com', '32342', 'ROLE_RECRUITER', TRUE, NULL, NULL);


INSERT INTO participants(participant_id, first_name, last_name, email, sent, returned, taken, active, image)
    VALUES (1, 'Ivan', 'Karamov', 'adsdasd@gmail.com', '2015-12-25', '2015-12-26', 'done', TRUE, NULL) ;
INSERT INTO participants(participant_id, first_name, last_name, email, sent, returned, taken, active, image)
    VALUES (2, 'Vasya', 'Bimov', 'fsdfdd@gmail.com', '2015-12-04', '2015-12-05', 'done', TRUE, NULL );
INSERT INTO participants(participant_id, first_name, last_name, email, sent, returned, taken, active, image)
    VALUES (3, 'Misha', 'Hoshiy', 'aggggsd@gmail.com', '2015-12-09', '2015-12-10', 'inProcess', TRUE, NULL);
INSERT INTO participants(participant_id, first_name, last_name, email, sent, returned, taken, active, image)
    VALUES (4, 'Ihor', 'Wol', 'allsdasd@gmail.com', '2015-12-06', '2015-12-07', 'inProcess', TRUE, NULL);
