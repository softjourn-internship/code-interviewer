package com.code.reviewer.executing.technologies;

import com.code.reviewer.executing.Technology;

import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * Created by NicholasG on 14.02.2016.
 */
public class Java extends Technology {

    public Java() {
    }

    public Java(String className) {
        this.className = className;
    }

    @Override
    public void compile() throws Exception {

    }

    @Override
    public String execute() throws Exception {
        ProcessBuilder builder = new ProcessBuilder(
                "cmd.exe", "/c", "javac Test.java && java Test");
        builder.redirectErrorStream(true);
        Process p = builder.start();
        BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
        String output = "";
        while (true) {
            String line = r.readLine();
            if (line == null) {
                break;
            }
            output += line;
            System.out.println(line);
        }
        return output;
    }
}
