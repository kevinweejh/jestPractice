import { capitalise } from '../src/functionsGalore.js';

describe('capitalise function tests', () => {
    describe('type checking', () => {
        it('only accepts string input', () => {
            const stringInput = 'hi!';
            const numberInput = 1;
            const arrayInput = ['yo', 'hello', 'bonjour'];

            expect(capitalise(stringInput)).not.toThrow();
            expect(capitalise(numberInput)).toThrow();
            expect(capitalise(arrayInput)).toThrow();
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