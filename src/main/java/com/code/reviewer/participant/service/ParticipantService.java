package com.code.reviewer.participant.service;

import com.code.reviewer.participant.domain.Participant;

import java.sql.Date;
import java.util.Collection;
import java.util.Set;

/**
 * Created by NicholasG on 17.01.2016.
 */
public interface ParticipantService {

    Collection<Participant> getAll();

    Participant findOne(Long id);

    Participant findOneByEmail(String email);

    Set<Participant> findBySentDate(Date startLimit, Date endLimit);

    Set<Participant> findByFirstName(String firstName);

    Set<Participant> findByEmail(String email);

    void save(Participant participant);

}
