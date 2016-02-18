package com.code.reviewer.statistics.service.impl;

import com.code.reviewer.statistics.repository.StatisticsRepository;
import com.code.reviewer.statistics.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by Iwan on 13.02.2016.
 */
@Component("statisticsService")
public class StatisticsServiceImpl implements StatisticsService {
    @Autowired
    StatisticsRepository statisticsRepository;

    @Override
    public int getCountTestsForTechnology(String technology) {
        return statisticsRepository.findTestByTechnology(technology);
    }
}
