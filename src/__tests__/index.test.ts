import * as tsd from '../index';

const xform = tsd.compose(
  tsd.filter((x: number) => x % 2 !== 0),
  tsd.map((x) => x * 2),
  tsd.map((x) => x.toString()),
  tsd.take(5)
);
const transform = (xs: number[]) =>
  xs
    .filter((x) => x % 2 !== 0)
    .map((x) => x * 2)
    .map((x) => x.toString())
    .slice(0, 5);
const testData = Array(100)
  .fill(0)
  .map((_, i) => i);

describe('transducers', () => {
  it('transduce append works', () => {
    const expected = transform(testData);
    const result = tsd.transduce(xform, tsd.append, [] as string[])(testData);

    expect(result).toEqual(expected);
  });

  it('transduce + works', () => {
    const xf = tsd.compose(
      tsd.filter((x: number) => x % 2 !== 0),
      tsd.map((x) => x * 2),
      tsd.take(5)
    );

    const expected = testData
      .filter((x) => x % 2 !== 0)
      .map((x) => x * 2)
      .slice(0, 5)
      .reduce((r, x) => r + x, 0);
    const result = tsd.transduce(xf, (r, x) => r + x, 0)(testData);

    expect(result).toEqual(expected);
  });

  it('into works', () => {
    const expected = transform(testData);
    const result = tsd.into([], xform)(testData);

    expect(result).toEqual(expected);
  });

  it('take works multiple times', () => {
    const expected = testData.slice(0, 5);
    const xf = tsd.take<number>(5);
    const result0 = tsd.into([], xf)(testData);
    const result1 = tsd.into([], xf)(testData);

    expect(result0).toEqual(expected);
    expect(result1).toEqual(expected);
  });

  it('sequence works', () => {
    const expected = transform(testData);
    const result = [...tsd.sequence(xform, testData)];

    expect(result).toEqual(expected);
  });
});
