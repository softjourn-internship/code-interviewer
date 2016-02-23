package com.code.reviewer.participant.service.impl;

import com.code.reviewer.participant.domain.Participant;
import com.code.reviewer.participant.repository.ParticipantRepository;
import com.code.reviewer.participant.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.Collection;
import java.util.Set;

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

    @Override
    public Set<Participant> findBySentDate(Date startLimit, Date endLimit) {
        return repository.findByDate(startLimit, endLimit);
    }

    @Override
    public Set<Participant> findByFirstName(String firstName) {
        return repository.findByFirstName(firstName);
    }

    @Override
    public Set<Participant> findByEmail(String email) {
        return repository.findByEmail(email);
    }
}
