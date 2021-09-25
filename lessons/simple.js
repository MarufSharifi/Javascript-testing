const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(10, 5);
expected = 5;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
