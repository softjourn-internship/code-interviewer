package com.code.reviewer.executing;

import com.code.reviewer.executing.technologies.Java;

/**
 * Created by NicholasG on 14.02.2016.
 */
public class TechnologyFactory {

    public Technology getTechnology(String technology) {
        if (technology == null) {
            return null;
        }
        if (technology.equalsIgnoreCase("JAVA")) {
            return new Java();
        } else {
            return null;
        }
    }

}
