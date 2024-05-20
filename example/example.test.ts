// __tests__/example.test.ts
import { add } from "./example";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 3 + (-5) to equal -2", () => {
  expect(add(3, -5)).toBe(-2);
});
