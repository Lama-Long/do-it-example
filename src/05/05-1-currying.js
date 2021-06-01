const x = 10;

const multiply = (a, b) => a * b;

const add = (a, b) => a + b;
const multiplyX = (x) => (a) => multiply(a, x);

const addX = (x) => (a) => add(a, x);
export const multiplyTwo = (a) => multiply(a, 2);
export const multiplyThree = multiplyX(3);

const multiplyFour = multiplyX(4);
const equation = (a, b, c) => (x) => x * a * b + c;

export const addFour = addX(4);

const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));

/////////////////////////////////////////////////////

const formulaB = (x) => multiplyTwo(multiplyThree(addFour(x)));
