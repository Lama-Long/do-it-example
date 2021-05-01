const x = 10;

const multiply = (a, b) => a * b;

const add = (a, b) => a + b;
const multiplyX = (x) => (a) => multiply(a, x);

const addX = (x) => (a) => add(a, x);
const multiplTwo = (a) => multiply(a, 2);
const multiplyThree = multiplyX(3);

const multiplyFour = multiplyX(4);
const equation = (a, b, c) => (x) => x * a * b + c;

const addFour = addX(4);

const formula = (x) => addFour(multiplyThree(multiplTwo(x)));

console.log(formula(3));

/////////////////////////////////////////////////////
