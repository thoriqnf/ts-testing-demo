// utils.test.ts
import {
  add,
  getUser,
  getValue,
  isPositive,
  divide,
  getArray,
  getString,
  getNumber,
  isNull,
  isUndefined,
} from "./utils";

test("adding 1 + 2 equals 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("returns the correct object", () => {
  expect(getUser()).toEqual({
    id: 1,
    username: "john_doe",
    email: "john@example.com",
  });
});

test("returns a defined value", () => {
  expect(getValue()).toBeDefined();
});

test("returns true for positive value", () => {
  expect(isPositive(10)).toBeTruthy();
});

test("throws an error when dividing by zero", () => {
  expect(() => {
    divide(10, 0);
  }).toThrow();
});

test("checks if array contains a specific value", () => {
  expect(getArray()).toContain("apple");
});

test("checks if string contains a specific substring", () => {
  expect(getString()).toContain("hello");
});

test("checks if value is greater than 10", () => {
  expect(getNumber()).toBeGreaterThan(10);
});

test("returns null", () => {
  expect(isNull()).toBeNull();
});

test("returns undefined", () => {
  expect(isUndefined()).toBeUndefined();
});
