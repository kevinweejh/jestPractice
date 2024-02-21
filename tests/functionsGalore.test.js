import { capitalise, reverseString, calculator } from '../src/functionsGalore.js';

describe('capitalise function tests', () => {
    describe('type checking', () => {
        it('only accepts string input', () => {
            const stringInput = 'hi!';
            const numberInput = 1;
            const arrayInput = ['yo', 'hello', 'bonjour'];

            expect(() => capitalise(stringInput)).not.toThrow();
            expect(() => capitalise(numberInput)).toThrow();
            expect(() => capitalise(arrayInput)).toThrow();
        });
        it('returns string output', () => {
            const stringInput = 'hi!';
            expect(typeof capitalise(stringInput)).toBe('string');
        });
    });

    describe('function behaviour checking', () => {
        it('handles non-capitalised input correctly', () => {
            const stringInput = 'hi!';
            expect(capitalise(stringInput)).toBe('Hi!');
        });
        it('handles capitalised input correctly', () => {
            const stringInput = 'Yo!!';
            expect(capitalise(stringInput)).toBe('Yo!!');
        })
    });
})

describe('reverseString function tests', () => {
    describe('type checking', () => {
        it('only accepts string input', () => {
            const stringInput = 'hi!';
            const numberInput = 1;
            const arrayInput = ['yo', 'hello', 'bonjour'];

            expect(() => reverseString(stringInput)).not.toThrow();
            expect(() => reverseString(numberInput)).toThrow();
            expect(() => reverseString(arrayInput)).toThrow();
        });
        it('returns string output', () => {
            const stringInput = 'hi!';
            expect(typeof reverseString(stringInput)).toBe('string');
        });
    });

    describe('function behaviour checking', () => {
        it('handles non-empty input correctly', () => {
            const nonEmptyInput = 'hi!';
            expect(reverseString(nonEmptyInput)).toBe('!ih');
        });
        it('handles empty input correctly', () => {
            const emptyStringInput = '';
            expect(() => reverseString(emptyStringInput)).toThrow();
        })
    });
})

describe('calculate function tests', () => {
    describe('type checking', () => {
        it('only accepts number inputs', () => {
            const numberInput = 1;
            const stringInput = 'hi!';
            const arrayInput = ['yo', 'hello', 'bonjour'];

            expect(() => calculator.add(numberInput, numberInput)).not.toThrow();
            expect(() => calculator.add(stringInput, stringInput)).toThrow('number');
            expect(() => calculator.add(arrayInput, arrayInput)).toThrow('number');
        });
        it('accepts exactly two inputs', () => {
            const numberInput = 1;

            expect(() => calculator.add(numberInput, numberInput)).not.toThrow();
            expect(() => calculator.add()).toThrow('exactly two');
            expect(() => calculator.add(numberInput)).toThrow('exactly two');
            expect(() => calculator.add(numberInput, numberInput, numberInput)).toThrow('exactly two');
        });
    });

    describe('function behaviour checking', () => {
        it('addition operation', () => {
            const firstNum = 5;
            const secondNum = 5;

            expect(calculator.add(firstNum, secondNum)).toBe(10);
        });
        it('subtraction operation', () => {
            const firstNum = 5;
            const secondNum = 5;

            expect(calculator.subtract(firstNum, secondNum)).toBe(0);
        });
        it('division operation', () => {
            const firstNum = 5;
            const secondNum = 5;

            expect(calculator.divide(firstNum, secondNum)).toBe(1);
        });
        it('multiplication operation', () => {
            const firstNum = 5;
            const secondNum = 5;

            expect(calculator.multiply(firstNum, secondNum)).toBe(25);
        });
    });
})