package com.code.reviewer.user.repository;

import com.code.reviewer.user.domain.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by NicholasG on 26.01.2016.
 */
public interface ActivityRepository extends JpaRepository<Activity, Long> {



}
