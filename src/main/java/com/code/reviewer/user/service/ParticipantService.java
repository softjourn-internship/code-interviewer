package com.code.reviewer.user.service;

import com.code.reviewer.user.domain.Participant;

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
