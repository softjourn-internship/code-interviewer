package com.code.reviewer.participant.service;

import com.code.reviewer.participant.domain.Participant;

import java.util.Collection;

/**
 * Created by NicholasG on 17.01.2016.
 */
public interface ParticipantService {

    Collection<Participant> getAll();

    Participant findOne(Long id);

    Participant findOneByEmail(String email);

    void save(Participant participant);

}
