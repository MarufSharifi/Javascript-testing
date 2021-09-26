import assert from "assert";
import { thumbWar } from "../../thumb-war.js";
import { utils } from "../../utils.js";

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

function spyOn(object, prop) {
  const originalValue = object[prop];
  object[prop] = fn();
  object[prop].mockRestore = () => (object[prop] = originalValue);
}

spyOn(utils, "getWinner");
utils.getWinner.mockImplementation();

const winner = thumbWar("Kent C. Dodds", "Ken wheeler");

assert.strictEqual(winner, "Kent C. Dodds");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Kent C. Dodds", "Ken wheeler"],
  ["Kent C. Dodds", "Ken wheeler"],
]);

utils.getWinner.mockRestore();
