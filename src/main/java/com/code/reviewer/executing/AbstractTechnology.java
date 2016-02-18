package com.code.reviewer.executing;

/**
 * Created by NicholasG on 14.02.2016.
 */
public abstract class AbstractTechnology {

    protected String className;

    public abstract void compile() throws Exception;

    public abstract String execute() throws Exception;

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

}
