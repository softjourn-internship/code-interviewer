package com.code.reviewer.executing;

import com.code.reviewer.executing.technologies.Java;

import javax.validation.constraints.NotNull;

/**
 * Created by NicholasG on 14.02.2016.
 */
public class TechnologyFactory {

    public AbstractTechnology getTechnology(@NotNull EnumTechnology technology) {
        if (EnumTechnology.JAVA.equals(technology)) {
            return new Java();
        } else {
            return null;
        }
    }

}
