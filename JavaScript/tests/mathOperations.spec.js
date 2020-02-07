const suma = require('../src/mathOperations');

describe('Test Math Operations', () => {
    test('1 + 2 is 3', () => {
        expect(suma(1, 2)).toBe(3)
    })
})
