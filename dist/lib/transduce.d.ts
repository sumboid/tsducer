import type { Reducer, XForm } from './types';
export declare const append: <P>(res: P[], x: P) => P[];
export declare const transduce: <P, Q, R>(xf: XForm<P, Q>, reducer: Reducer<Q, R>, init: R) => (xs: P[]) => R;
