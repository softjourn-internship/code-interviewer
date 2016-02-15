package com.codeinterviewer;

import com.code.reviewer.executing.Technology;
import com.code.reviewer.executing.TechnologyFactory;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/**
 * Created by NicholasG on 14.02.2016.
 */
public class TestJava {

    @BeforeTest
    public void beforeMethod() throws IOException {
        File file = new File("Test.java");
        file.createNewFile();
        FileWriter fileWriter = new FileWriter(file);
        fileWriter.write(
                "public class Test {\n" +
                        "\n\tpublic static void main(String[] args) { System.out.println(\"Hello, world!\"); }" +
                        "\n" +
                        "\n}"
        );
        fileWriter.flush();
        fileWriter.close();
    }

    @Test
    public void test() throws Exception {
        Technology java = new TechnologyFactory().getTechnology("java");
        java.execute();
    }

}
