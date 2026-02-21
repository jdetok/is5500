import { add, subtract, multiply, divide, square, squareRoot } from "./calculator.js"

describe('basic passing calculator tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('subtracts 3 from 2 to equal 1', () => {
        expect(subtract(3, 2)).toBe(1);
    });
    test('multiplies 3 * 2 to equal 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });
    test('divides 6 by 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });
    test('square 3 to be 9', () => {
        expect(square(3)).toBe(9);
    });
    test('square root 9 to be 3', () => {
        expect(squareRoot(9)).toBe(3);
    });
});

describe('test that non number values fail', () => {
    test('add non number fail', () => {
        expect(() => add("1", "h")).toThrow();
    });
    test('subtract non number fail', () => {
        expect(() => subtract("1", "h")).toThrow();
    });
    test('multiply non number fail', () => {
        expect(() => multiply("1", "h")).toThrow();
    });
    test('divide non number fail', () => {
        expect(() => divide("1", "h")).toThrow();
    });
    test('square fail', () => {
        expect(() => square("l")).toThrow();
    });
    test('square root fail', () => {
        expect(() => squareRoot("l")).toThrow();
    });
});
