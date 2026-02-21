import { add, subtract, multiply, divide } from "./calculator.js"

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
