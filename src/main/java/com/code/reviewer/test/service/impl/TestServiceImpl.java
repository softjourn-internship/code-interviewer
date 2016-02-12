package com.code.reviewer.test.service.impl;

import com.code.reviewer.test.domain.Test;
import com.code.reviewer.test.repository.TestRepository;
import com.code.reviewer.test.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by Iwan on 12.02.2016.
 */
@Component("testService")
public class TestServiceImpl implements TestService {

    @Autowired
    private TestRepository testRepository;

    @Override
    public void save(Test test) {
        testRepository.save(test);
    }
}
