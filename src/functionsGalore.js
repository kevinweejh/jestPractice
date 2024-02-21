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
    }
}