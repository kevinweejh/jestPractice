import { capitalise, reverseString, calculator, caesarCipher, analyzeArray } from '../src/functionsGalore.js';

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

describe('caesarCipher function tests', () => {
    const shiftFactor = 5;
    describe('type checking', () => {
        it('only accepts string input', () => {
            const stringInput = 'hi!';
            const numberInput = 1;
            const arrayInput = ['yo', 'hello', 'bonjour'];

            expect(() => caesarCipher(stringInput, shiftFactor)).not.toThrow();
            expect(() => caesarCipher(numberInput, shiftFactor)).toThrow();
            expect(() => caesarCipher(arrayInput, shiftFactor)).toThrow();
        });
        it('returns string output', () => {
            const stringInput = 'hello';

            expect(typeof caesarCipher(stringInput, shiftFactor)).toBe('string');
        });
    });

    describe('function behaviour checking', () => {
        it('handles empty input correctly', () => {
            const emptyStringInput = '';
            expect(() => caesarCipher(emptyStringInput, shiftFactor)).toThrow('non-empty');
        })
        it('handles words that wrap from z to a', () => {
            const wrappedInput = 'zapdos';

            expect(caesarCipher(wrappedInput, shiftFactor)).toBe('efuitx');
        });
        it('handles words with mixed case', () => {
            const mixedCaseInput = 'ZapDos';
            
            expect(caesarCipher(mixedCaseInput, shiftFactor)).toBe('EfuItx');
        });
        it('leave punctuations unchanged', () => {
            const punctuatedInput = '.zapdos!';

            expect(caesarCipher(punctuatedInput, shiftFactor)).toBe('.efuitx!');
        })
    });
})

describe('analyzeArray function tests', () => {
    describe('type checking', () => {
        it('only accepts array inputs', () => {
            const stringInput = 'hi!';
            const numberInput = 1;
            const arrayInput = [1,2,3];

            expect(() => analyzeArray(stringInput)).toThrow();
            expect(() => analyzeArray(numberInput)).toThrow();
            expect(() => analyzeArray(arrayInput)).not.toThrow();
        });
        it('only accepts number arrays', () => {
            const stringArrayInput = ['yo', 'hello', 'bonjour'];
            const numberArrayInput = [1,8,3,4,2,6];

            expect(() => analyzeArray(stringArrayInput)).toThrow();
            expect(() => analyzeArray(numberArrayInput)).not.toThrow();
        });
    });

    describe('function behaviour checking', () => {
        it('handles empty array correctly', () => {
            const emptyArrayInput = [];
            expect(() => analyzeArray(emptyArrayInput)).toThrow('non-empty');
        })
        it('handles negative numbers', () => {
            const numberArray = [-1, 1, 2, 2];

            const matchedObj = {
                "average": 1,
                "min": -1,
                "max": 2,
                "length": 4 
            };
            expect(analyzeArray(numberArray)).toMatchObject(matchedObj);
        });
        it('handles non-integer average', () => {
            const nonIntegerAverageArray = [-1, 1, 2, 3];
            
            expect(analyzeArray(nonIntegerAverageArray).average).toBe(1.25);
        });
        it('handles 0 value average', () => {
            const averageZeroArray = [-1, 1, -2, 2];
            
            expect(analyzeArray(averageZeroArray).average).toBe(0);
        });
    });
})