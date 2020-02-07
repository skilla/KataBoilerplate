<?php

declare(strict_types=1);

namespace Kata\Main;

class MathOperations
{
    public function sum(int $firstNumber, int $secondNumber): int
    {
        return $firstNumber + $secondNumber;
    }

    public function subtraction(int $firstNumber, int $secondNumber): int
    {
        return $firstNumber - $secondNumber;
    }

    public function multiply(int $firstNumber, int $secondNumber): int
    {
        return $firstNumber * $secondNumber;
    }

    public function divide(int $firstNumber, int $secondNumber): float
    {
        return $firstNumber / $secondNumber;
    }
}
