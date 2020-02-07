<?php

declare(strict_types=1);

namespace Kata\Test;

use Kata\Main\MathOperations;
use PHPUnit\Framework\TestCase;

class MathOperationsTest extends TestCase
{
    public function testSum()
    {
        self::assertEquals(3, (new MathOperations())->sum(1, 2));
    }

    public function testSubtraction()
    {
        self::assertEquals(1, (new MathOperations())->subtraction(3, 2));
    }

    public function testMultiply()
    {
        self::assertEquals(6, (new MathOperations())->multiply(2, 3));
    }

    public function testDivide()
    {
        self::assertEquals(1.5, (new MathOperations())->divide(3, 2));
    }
}
