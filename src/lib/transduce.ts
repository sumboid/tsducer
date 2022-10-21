import { Reduced } from './types';
import type { Reducer, XForm } from './types';

export const append = <P>(res: P[], x: P): P[] => [...res, x];
export const transduce =
  <P, Q, R>(xf: XForm<P, Q>, reducer: Reducer<Q, R>, init: R) =>
  (xs: P[]): R => {
    let res = init;
    const form = xf(reducer);

    try {
      for (const x of xs) {
        res = form(res, x);
      }
    } catch (e: unknown) {
      if (!(e instanceof Reduced)) {
        throw e;
      }
    }

    return res;
  };

const mappend = <P>(res: P[], x: P): P[] => {
  res.push(x);
  return res;
};

export const into = <P, R>(to: R[], xf: XForm<P, R>): ((xs: P[]) => R[]) =>
  transduce(xf, mappend, to.slice(0));

export const sequence = <P, R>(
  xf: XForm<P, R>,
  xs: Iterable<P>
): Iterable<R> => {
  const reducer = xf(mappend as Reducer<R, R[]>);

  return (function* () {
    try {
      for (const x of xs) {
        const res = reducer([], x);
        if (res.length === 0) {
          continue;
        }

        yield res[0];
      }
    } catch (e: unknown) {
      if (!(e instanceof Reduced)) {
        throw e;
      }
    }
  })();
};
