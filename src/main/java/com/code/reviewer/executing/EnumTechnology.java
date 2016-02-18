package com.code.reviewer.executing;

/**
 * Created by NicholasG on 17.02.2016.
 */
public enum EnumTechnology {

    JAVA("java"),
    C_SHARP("c#"),
    PHP("php");

    private String technology;

    EnumTechnology(String technology) {
        this.technology = technology;
    }

    @Override
    public String toString() {
        return technology;
    }

}
