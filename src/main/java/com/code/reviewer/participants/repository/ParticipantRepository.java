package com.code.reviewer.participants.repository;

import com.code.reviewer.participants.domain.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 16.01.2016.
 */
public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

    Participant findOneByParticipantId(Integer id);

    Participant findOneByEmail(String email);

}
