export const capitalise = (input) => {
    if (typeof input !== 'string') {
        throw Error('Incorrect input type, please provide a string.');
        return;
    }
    const firstChar = input.slice(0, 1);
    const capitalisedFirstChar = firstChar.toUpperCase();
    const inputArray = input.split('');
    const outputArray = inputArray.slice();

    outputArray.splice(0,1,capitalisedFirstChar);
    const outputString = outputArray.join('');

    return outputString;
}

export const reverseString = (input) => {
    if (typeof input !== 'string') {
        throw Error('Incorrect input type, please provide a string.');
        return;
    }
    if (input.length === 0) {
        throw Error('Please provide a non-empty string.');
        return;
    }
    const inputArray = input.split('');
    const outputArray = inputArray.reverse();
    const outputString = outputArray.join('');

    return outputString;
}

export const calculator = {
    add(firstNum, secondNum) {
        if (arguments.length !== 2) {
            throw Error('Incorrect number of inputs, please provide exactly two.');
            return;
        }
        if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
            throw Error('Incorrect input type, please provide number inputs.');
            return
        }

        return firstNum + secondNum;
    }, 
    subtract(firstNum, secondNum) {
        if (arguments.length !== 2) {
            throw Error('Incorrect number of inputs, please provide exactly two.');
            return;
        }
        if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
            throw Error('Incorrect input type, please provide number inputs.');
            return
        }

        return firstNum - secondNum;
    },
    divide(firstNum, secondNum) {
        if (arguments.length !== 2) {
            throw Error('Incorrect number of inputs, please provide exactly two.');
            return;
        }
        if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
            throw Error('Incorrect input type, please provide number inputs.');
            return
        }

        return firstNum / secondNum;
    }, 
    multiply(firstNum, secondNum) {
        if (arguments.length !== 2) {
            throw Error('Incorrect number of inputs, please provide exactly two.');
            return;
        }
        if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
            throw Error('Incorrect input type, please provide number inputs.');
            return
        }

        return firstNum * secondNum;
    }
}

export const caesarCipher = (plaintext, shiftFactor) => {
    if (typeof plaintext !== 'string') {
        throw Error('Incorrect input type, please provide a string.');
        return;
    }
    if (plaintext.length === 0) {
        throw Error('Please provide a non-empty string.');
        return;
    }
    
    const cyphertext = plaintext
                        .split('') // Array of plainChars
                        .map((plainChar) => shiftChar(plainChar, shiftFactor)) // Array of cypherChars
                        .join('');

    return cyphertext;
}

const shiftChar = (plainChar, shiftFactor) => {
    const plainCode = plainChar.charCodeAt();
    let cypherChar, cypherCode;

    // To select the appropriate shift for lowercase vs uppercase alphabets
    const codeSet = (plainCode) => (plainCode < 97 ? 65 : 97);

    // Alphabets
    if ((plainCode <= 122 && plainCode >= 97) || (plainCode <= 90 && plainCode >= 65)) { 
        cypherCode = ((plainCode + shiftFactor - codeSet(plainCode)) % 26) + codeSet(plainCode);
        cypherChar = String.fromCharCode(cypherCode);
    } else { // Punctuations
        cypherCode = plainCode;
        cypherChar = String.fromCharCode(cypherCode);
    }

    return cypherChar;
}