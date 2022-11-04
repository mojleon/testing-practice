const calculator = require('./Calculator');

describe('Calculator', () => {
    it('should add two numbers', () => {
        expect(calculator(1, '+', 2)).toBe(3);
    });
    it('should subtract two numbers', () => {
        expect(calculator(1, '-', 2)).toBe(-1);
    });
    it('should multiply two numbers', () => {
        expect(calculator(1, '*', 2)).toBe(2);
    });
    it('should divide two numbers', () => {
        expect(calculator(1, '/', 2)).toBe(0.5);
    });
    it('should return "Invalid operator" if an invalid operator is used', () => {
        expect(calculator(1, '!', 2)).toBe('Invalid operator');
    });
});