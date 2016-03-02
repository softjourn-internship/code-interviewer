package com.code.reviewer.executing.technologies;

import com.code.reviewer.executing.AbstractTechnology;

import java.io.*;
import java.util.ArrayList;

/**
 * Created by NicholasG on 14.02.2016.
 */
public class Java extends AbstractTechnology {

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
                "cmd.exe", "/c", "javac " + className + ".java && java " + className);
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

    public ArrayList<String> classNameFromFile(File file) throws IOException {
        FileReader fileReader = new FileReader(file);
        BufferedReader reader = new BufferedReader(fileReader);
        String line = reader.readLine();
        ArrayList<String> content = new ArrayList<>();
        while (line != null) {
            content.add(line);
            line = reader.readLine();
        }
        return content;
    }

}
