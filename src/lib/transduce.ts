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
