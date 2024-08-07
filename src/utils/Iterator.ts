class RangeIterator implements Iterator<number> {
  private current: number;
  private readonly end: number;
  private readonly step: number;

  constructor(start: number, end: number, step: number) {
    this.current = start;
    this.end = end;
    this.step = step;
  }

  public next(): IteratorResult<number> {
    if (this.current < this.end) {
      const value = this.current;
      this.current += this.step;
      return { value, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

export function range(
  start: number,
  end: number,
  step: number
): Iterable<number> {
  return {
    [Symbol.iterator]: () => new RangeIterator(start, end, step),
  };
}
