// calculator.test.ts
import { Calculator } from "./calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts 5 - 3 to equal 2", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiplies 2 * 3 to equal 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("divides 6 / 2 to equal 3", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("throws error on division by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Division by zero");
  });
});
