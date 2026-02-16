const test = require("node:test");
const assert = require("node:assert/strict");
const { sum } = require("../src/index");

const cases = [
  { a: 1, b: 2, expected: 3 },
  { a: -1, b: 1, expected: 0 },
  { a: 0, b: 0, expected: 0 },
  { a: -5, b: -7, expected: -12 },
  { a: 1.5, b: 2.25, expected: 3.75 },
];

for (const { a, b, expected } of cases) {
  test(`sum(${a}, ${b}) === ${expected}`, () => {
    assert.equal(sum(a, b), expected);
  });
}
