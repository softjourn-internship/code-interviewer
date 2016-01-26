package com.code.reviewer.user.service.impl;

import com.code.reviewer.user.domain.Participant;
import com.code.reviewer.user.repository.ParticipantRepository;
import com.code.reviewer.user.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * Created by NicholasG on 17.01.2016.
 */
@Component("participantService")
public class ParticipantServiceImpl implements ParticipantService {

    @Autowired
    private ParticipantRepository repository;

    @Override
    public Collection<Participant> getAll() {
        return repository.findAll();
    }

    @Override
    public Participant findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public Participant findOneByEmail(String email) {
        return repository.findOneByEmail(email);
    }

    @Override
    public void save(Participant participant) {
        repository.save(participant);
    }
}
