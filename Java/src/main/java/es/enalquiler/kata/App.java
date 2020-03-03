package es.enalquiler.kata;

import es.enalquiler.kata.example.MathOperations;

public class App
{
    public static void main( String[] args )
    {
        MathOperations mathOperations = new MathOperations();

        System.out.print( "1 + 2 = " );
        System.out.println( mathOperations.sum(1, 2) );

        System.out.print( "3 - 1 = " );
        System.out.println( mathOperations.subtraction(3, 1) );

        System.out.print( "3 * 2 = " );
        System.out.println( mathOperations.multiply(3, 2) );

        System.out.print( "3 / 2 = " );
        System.out.println( mathOperations.divide(3, 2) );
    }
}
