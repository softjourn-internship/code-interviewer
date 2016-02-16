package com.code.reviewer.statistics.controller;

import com.code.reviewer.statistics.domain.StatisticsForTasks;
import com.code.reviewer.statistics.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Created by Iwan on 14.02.2016.
 */
@RestController
@RequestMapping("/charts")
public class StatisticsController {

    @Autowired
    @Qualifier(value = "StatisticsService")
    private StatisticsService  statisticsService;

    @RequestMapping(value = "/task",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public StatisticsForTasks getStatisticsForTasks() {
        Set<Integer> data = new LinkedHashSet<Integer>();
        data.add(statisticsService.getCountTestsForTechnology("PHP"));
        data.add(statisticsService.getCountTestsForTechnology("Java"));
        data.add(statisticsService.getCountTestsForTechnology("C#"));
        StatisticsForTasks statisticsForTasks= new StatisticsForTasks(data);
        return statisticsForTasks;
    }
}
