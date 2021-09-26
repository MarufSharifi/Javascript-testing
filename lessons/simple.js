import { sum, subtract, sumAsync, subtractAsync } from "../math.js";

test("sum test were running", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract test was running", () => {
  const result = subtract(10, 5);
  const expected = 5;
  expect(result).toBe(expected);
});

test("async sum test is running", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("async subtract is running", async () => {
  const result = await subtractAsync(10, 5);
  const expected = 5;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`@ ${title}`);
  } catch (error) {
    console.log(`x ${title}`);
    console.log(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}
