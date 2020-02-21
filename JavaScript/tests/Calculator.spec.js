'use strict'

import { Calculator } from 'root/Calculator';

describe('Test Math Operations', () => {
    test('sum         => 1 + 2 is 3', () => {
        expect((new Calculator()).sum(1, 2)).toBe(3)
    });
    test('subtraction => 3 - 1 is 2', () => {
        expect((new Calculator()).subtraction(3, 1)).toBe(2)
    });
    test('multiply    => 3 * 2 is 6', () => {
        expect((new Calculator()).multiply(3, 2)).toBe(6)
    });
    test('divide      => 3 / 2 is 1.5', () => {
        expect((new Calculator()).divide(3, 2)).toBe(1.5)
    });
})
