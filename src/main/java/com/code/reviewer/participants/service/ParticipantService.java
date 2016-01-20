package com.code.reviewer.participants.service;

import com.code.reviewer.participants.domain.Participant;

import java.util.Collection;

/**
 * Created by NicholasG on 17.01.2016.
 */
public interface ParticipantService {

    Collection<Participant> getAll();

    Participant findOneByParticipantId(Integer id);

    Participant findOneByEmail(String email);

    void save(Participant participant);

}
