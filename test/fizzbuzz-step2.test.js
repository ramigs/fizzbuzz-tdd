const fizzbuzz = require("../src/Step2/functions");

test("fizzbuzz [1, 2, 3] 20 returns false", () => {
  expect(fizzbuzz([1, 2, 3], 20)).toBe(false);
});

test("fizzbuzz 3.14 20 returns false", () => {
  expect(fizzbuzz(3.14, 20)).toBe(false);
});

test("fizzbuzz 3 16.5 returns false", () => {
  expect(fizzbuzz(3, 16.5)).toBe(false);
});

test("fizzbuzz 30 2 returns []", () => {
  expect(fizzbuzz(30, 2)).toBe(false);
});

test("fizzbuzz -4 1 returns [-4, 'lucky', -2, -1, 'fizzbuzz', 1]", () => {
  let result = [-4, "lucky", -2, -1, "fizzbuzz", 1];
  expect(fizzbuzz(-4, 1)).toStrictEqual(result);
});

test("fizzbuzz 1 1 returns [1]", () => {
  let result = [1];
  expect(fizzbuzz(1, 1)).toStrictEqual(result);
});

test("fizzbuzz 45 45 returns ['fizbuzz']", () => {
  let result = ["fizzbuzz"];
  expect(fizzbuzz(45, 45)).toStrictEqual(result);
});

test("fizzbuzz 2 14 returns [2, 'lucky', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 'lucky', 14, 'fizzbuzz', 16]", () => {
  let result = [
    2,
    "lucky",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
    "buzz",
    11,
    "fizz",
    "lucky",
    14
  ];
  expect(fizzbuzz(2, 14)).toStrictEqual(result);
});

test("fizzbuzz -3 -1 returns ['fizz', -2, -1]", () => {
  let result = ["lucky", -2, -1];
  expect(fizzbuzz(-3, -1)).toStrictEqual(result);
});
