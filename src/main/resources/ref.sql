  ALTER TABLE user_participant
  ADD  FOREIGN KEY (username) REFERENCES users (username);

  ALTER TABLE user_participant
  ADD  FOREIGN KEY (participantId) REFERENCES participants (participantId);

