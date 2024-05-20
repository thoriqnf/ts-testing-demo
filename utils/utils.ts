// utils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function getUser() {
  return {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
  };
}

export function getValue() {
  return 42;
}

export function isPositive(value: number): boolean {
  return value > 0;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function getArray(): string[] {
  return ["apple", "banana", "cherry"];
}

export function getString(): string {
  return "hello world";
}

export function getNumber(): number {
  return 50;
}

export function isNull(): null {
  return null;
}

export function isUndefined(): undefined {
  return undefined;
}
