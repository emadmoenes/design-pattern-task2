import { rangeGenerator } from "./Generator";

describe("rangeGenerator", () => {
  it("should generate numbers from start to end with a given step", () => {
    const start = 0;
    const end = 10;
    const step = 2;
    const expected = [0, 2, 4, 6, 8];
    const result = Array.from(rangeGenerator(start, end, step));
    expect(result).toEqual(expected);
  });

  it("should throw an error if step is non-positive", () => {
    expect(() => rangeGenerator(0, 10, 0)).toThrow(
      "Step must be a positive number."
    );
    expect(() => rangeGenerator(0, 10, -1)).toThrow(
      "Step must be a positive number."
    );
  });

  it("should throw an error if start is not less than end", () => {
    expect(() => rangeGenerator(10, 10, 1)).toThrow(
      "Start must be less than end."
    );
    expect(() => rangeGenerator(10, 5, 1)).toThrow(
      "Start must be less than end."
    );
  });

  it("should handle edge cases", () => {
    const start = 5;
    const end = 5;
    const step = 1;
    const expected: number[] = [];
    const result = Array.from(rangeGenerator(start, end, step));
    expect(result).toEqual(expected);

    const start2 = 0;
    const end2 = 1;
    const step2 = 1;
    const expected2 = [0];
    const result2 = Array.from(rangeGenerator(start2, end2, step2));
    expect(result2).toEqual(expected2);
  });
});
