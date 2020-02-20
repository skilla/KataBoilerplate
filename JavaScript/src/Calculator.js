'use strict';

class Calculator {
    constructor() {
    }

    sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    subtraction(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }

    divide(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
};

export { Calculator };
