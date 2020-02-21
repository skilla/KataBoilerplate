const operations = require('root/MathOperations');

describe('Test Math Operations', () => {
    test('sum         => 1 + 2 is 3', () => {
        expect(operations.sum(1, 2)).toBe(3)
    });
    test('subtraction => 3 - 1 is 2', () => {
        expect(operations.subtraction(3, 1)).toBe(2)
    });
    test('multiply    => 3 * 2 is 6', () => {
        expect(operations.multiply(3, 2)).toBe(6)
    });
    test('divide      => 3 / 2 is 1.5', () => {
        expect(operations.divide(3, 2)).toBe(1.5)
    });
})
