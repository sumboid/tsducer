import * as tsd from '../index';

describe('transducers', () => {
  it('work', () => {
    const xf = tsd.compose(
      tsd.filter((x: number) => x % 2 !== 0),
      tsd.map((x) => x * 2),
      tsd.map((x) => x.toString()),
      tsd.take(5)
    );
    const xs = Array(100)
      .fill(0)
      .map((_, i) => i);

    const expected = xs
      .filter((x) => x % 2 !== 0)
      .map((x) => x * 2)
      .map((x) => x.toString())
      .slice(0, 5);
    const result = tsd.transduce(xf, tsd.append, [] as string[])(xs);

    expect(result).toEqual(expected);
  });
});
