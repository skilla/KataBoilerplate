package es.enalquiler.kata.example;

import org.junit.Test;

import static org.junit.Assert.*;

public class MathOperationsTest
{
    @Test
    public void theSumOfOnePlusTwoMustGiveThree()
    {
        assertEquals(3, new MathOperations().sum(1, 2));
    }

    @Test
    public void theSubtractionOfThreeMinusOneMustGiveTwo()
    {
        assertEquals(2, new MathOperations().subtraction(3, 1));
    }

    @Test
    public void theMultiplicationOfThreeByTwoMustGiveSix()
    {
        assertEquals(6, new MathOperations().multiply(3, 2));
    }

    @Test
    public void theDivisionOfThreeByTwoMustGiveOnePointFive()
    {
        assertEquals(1.5, new MathOperations().divide(3, 2), 0.0);
    }
}
