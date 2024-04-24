const Calculator = require('./test'); // Assuming the Calculator class is exported from Calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add method should correctly add numbers', () => {
        calculator.add(5);
        expect(calculator.getResult()).toBe(5);

        calculator.add(3);
        expect(calculator.getResult()).toBe(8);
    });
});