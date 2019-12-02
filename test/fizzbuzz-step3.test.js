const fizzbuzz = require("../src/Step3/functions");

test("fizzbuzz [1, 2, 3] 20 returns false", () => {
  expect(fizzbuzz([1, 2, 3], 20)).toBe(false);
});

test("fizzbuzz 3.14 20 returns false", () => {
  expect(fizzbuzz(3.14, 20)).toBe(false);
});

test("fizzbuzz 3 16.5 returns false", () => {
  expect(fizzbuzz(3, 16.5)).toBe(false);
});

test("fizzbuzz 30 2 returns false", () => {
  expect(fizzbuzz(30, 2)).toBe(false);
});

test("fizzbuzz -4 1 returns correct result and report", () => {
  let fizzbuzzObj = {
    result: [-4, "lucky", -2, -1, "fizzbuzz", 1],
    report: {
      fizz: 0,
      buzz: 0,
      fizzbuzz: 1,
      lucky: 1,
      integer: 4
    }
  };
  expect(fizzbuzz(-4, 1)).toStrictEqual(fizzbuzzObj);
});

test("fizzbuzz 1 1 returns correct result and report", () => {
  let fizzbuzzObj = {
    result: [1],
    report: {
      fizz: 0,
      buzz: 0,
      fizzbuzz: 0,
      lucky: 0,
      integer: 1
    }
  };
  expect(fizzbuzz(1, 1)).toStrictEqual(fizzbuzzObj);
});

test("fizzbuzz 45 45 returns correct result and report", () => {
  let fizzbuzzObj = {
    result: ["fizzbuzz"],
    report: {
      fizz: 0,
      buzz: 0,
      fizzbuzz: 1,
      lucky: 0,
      integer: 0
    }
  };
  expect(fizzbuzz(45, 45)).toStrictEqual(fizzbuzzObj);
});

test("fizzbuzz 2 14 returns correct result and report", () => {
  let fizzbuzzObj = {
    result: [
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
    ],
    report: {
      fizz: 3,
      buzz: 2,
      fizzbuzz: 0,
      lucky: 2,
      integer: 6
    }
  };
  expect(fizzbuzz(2, 14)).toStrictEqual(fizzbuzzObj);
});

test("fizzbuzz -3 -1 returns correct result and report", () => {
  let fizzbuzzObj = {
    result: ["lucky", -2, -1],
    report: {
      fizz: 0,
      buzz: 0,
      fizzbuzz: 0,
      lucky: 1,
      integer: 2
    }
  };
  expect(fizzbuzz(-3, -1)).toStrictEqual(fizzbuzzObj);
});
