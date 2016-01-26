package com.code.reviewer.user.repository;

import com.code.reviewer.user.domain.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 16.01.2016.
 */
public interface ParticipantRepository extends JpaRepository<Participant, Long> {

    Participant findOneByEmail(String email);

}
