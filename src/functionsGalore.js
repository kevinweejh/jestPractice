export default capitalise = (input) => {
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