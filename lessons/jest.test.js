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
