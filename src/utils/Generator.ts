export function* rangeGenerator(
  start: number,
  end: number,
  step: number
): Generator<number> {
  if (step <= 0) {
    throw new Error("Step must be a positive number.");
  }
  if (start >= end) {
    throw new Error("Start must be less than end.");
  }

  for (let current = start; current < end; current += step) {
    yield current;
  }
}
