package com.code.reviewer.participant.repository;

import com.code.reviewer.participant.domain.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.Set;

/**
 * Created by NicholasG on 16.01.2016.
 */
public interface ParticipantRepository extends JpaRepository<Participant, Long> {

    Participant findOneByEmail(String email);

    @Query("select p from Participant p where p.sent between :startLimit and :endLimit")
    Set<Participant> findByDate(@Param("startLimit") Date startLimit, @Param("endLimit") Date endLimit);

    @Query("select p from Participant p where p.firstName like :firstName")
    Set<Participant> findByFirstName(@Param("firstName") String firstName);

    @Query("select p from Participant p where p.email like :email")
    Set<Participant> findByEmail(@Param("email") String email);

}
