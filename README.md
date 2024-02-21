## Test-Driven Development with Jest in JavaScript

### Purpose
This repository showcases my journey in learning and practicing Test-Driven Development (TDD) using Jest in JavaScript. It includes a variety of JavaScript functions such as `capitalise`, `reverseString`, `calculator`, `caesarCipher`, and `analyzeArray`. Each function is accompanied by a comprehensive suite of tests, ensuring correctness, type safety, and expected behavior.

### Key Features
- Demonstrates TDD principles with Jest in JavaScript.
- Includes test suites for multiple utility functions.
- Covers various aspects like type checking, edge cases, and expected outputs.

### Functions and Tests
- `capitalise`: Capitalizes the first letter of a string.
- `reverseString`: Reverses the given string.
- `calculator`: Performs basic arithmetic operations.
- `caesarCipher`: Implements the Caesar cipher for string encryption.
- `analyzeArray`: Analyzes an array of numbers and returns an object with various statistics.

Each function is tested for:
- Type safety (e.g., string inputs for `capitalise`, numeric array for `analyzeArray`).
- Correct handling of normal and edge cases.
- Expected output validation.

### Usage
To run the tests, clone the repository and install the dependencies. Then, as shown below, either 
- run `npm test` to run the tests once through, or
- run `npm run watch` to have the tests run on save of any `.js` files in the directory.

```bash
git clone https://your-repository-url
cd your-repository-directory
npm install
npm test
npm run watch 
```

This will execute the test suites written for each function using Jest.

### Contribution and Support

#### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, replicate it as you will, and share your findings. 

If you have suggestions for improvements, feel free to submit a pull request.

#### Support

For support or to report issues, contact me at [hello@codebykevin.dev](mailto:hello@codebykevin.dev). 
