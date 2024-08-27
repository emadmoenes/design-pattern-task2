import { range } from "./Iterator";

describe("RangeIterator", () => {
  it("should iterate over numbers from start to end with a given step", () => {
    const start = 0;
    const end = 10;
    const step = 2;
    const expected = [0, 2, 4, 6, 8];

    const result = [];
    for (const value of range(start, end, step)) {
      result.push(value);
    }

    expect(result).toEqual(expected);
  });

  it("should handle edge cases", () => {
    const start = 5;
    const end = 5;
    const step = 1;
    const expected: number[] = [];
    const result = [];
    for (const value of range(start, end, step)) {
      result.push(value);
    }
    expect(result).toEqual(expected);

    const start2 = 0;
    const end2 = 1;
    const step2 = 1;
    const expected2 = [0];
    const result2 = [];
    for (const value of range(start2, end2, step2)) {
      result2.push(value);
    }
    expect(result2).toEqual(expected2);
  });

  it("should throw an error for invalid steps", () => {
    expect(() => range(0, 10, 0)).toThrow("Step must be a positive number.");
    expect(() => range(0, 10, -1)).toThrow("Step must be a positive number.");
  });

  it("should throw an error if start is not less than end", () => {
    expect(() => range(10, 10, 1)).toThrow("Start must be less than end.");
    expect(() => range(10, 5, 1)).toThrow("Start must be less than end.");
  });
});
