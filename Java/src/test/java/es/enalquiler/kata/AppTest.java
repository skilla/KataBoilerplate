package es.enalquiler.kata;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

public class AppTest
{
    private final ByteArrayOutputStream outContent = new ByteArrayOutputStream();
    private final ByteArrayOutputStream errContent = new ByteArrayOutputStream();
    private final PrintStream originalOut = System.out;
    private final PrintStream originalErr = System.err;

    @Before
    public void setUpStreams() {
        System.setOut(new PrintStream(outContent));
        System.setErr(new PrintStream(errContent));
    }

    @After
    public void restoreStreams() {
        System.setOut(originalOut);
        System.setErr(originalErr);
    }

    @Test
    public void checkOutputString()
    {
        final String expected =
            "1 + 2 = 3\n" +
            "3 - 1 = 2\n" +
            "3 * 2 = 6\n" +
            "3 / 2 = 1.5\n"
        ;

        App.main(new String[]{});
        assertEquals(expected, outContent.toString());
    }
}
