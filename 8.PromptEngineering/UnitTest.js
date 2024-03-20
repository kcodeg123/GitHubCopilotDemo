const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator(1, 2, '+')).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calculator(5, 3, '-')).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(calculator(3, 4, '*')).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(calculator(10, 2, '/')).toBe(5);
});

test('returns error when dividing by zero', () => {
    expect(calculator(10, 0, '/')).toBe('Error: Division by zero');
});

test('returns error for invalid operator', () => {
    expect(calculator(10, 2, 'invalid')).toBe('Error: Invalid operator');
});

test('returns remainder of 10 % 3 to equal 1', () => {
    expect(calculator(10, 3, '%')).toBe(1);
});