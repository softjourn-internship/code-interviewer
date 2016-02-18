package com.code.reviewer.statistics.domain;

import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Created by Iwan on 16.02.2016.
 */
public class StatisticsForTasks {

    private Set<String> labels = new LinkedHashSet<String>();
    private Set<Integer> data = new LinkedHashSet<Integer>();

    public StatisticsForTasks() {

    }

    public StatisticsForTasks(Set<Integer> data) {
        this.labels.add("PHP");
        this.labels.add("Java");
        this.labels.add("C#");
        this.data = data;
    }

    public Set<String> getLabels() {
        return labels;
    }

    public Set<Integer> getData() {
        return data;
    }

    public void setLabels(Set<String> labels) {
        this.labels = labels;
    }

    public void setData(Set<Integer> data) {
        this.data = data;
    }
}
