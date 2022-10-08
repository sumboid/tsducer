import { reduced, Reducer, XForm } from './types';

export type TMap = <P, Q>(f: (x: P) => Q) => XForm<P, Q>;
export const map: TMap =
  <P, Q>(f: (x: P) => Q) =>
  <N>(next: Reducer<Q, N>) =>
  (res: N, x: P): N =>
    next(res, f(x));

export type TFilter = <P>(pred: (x: P) => boolean) => XForm<P, P>;
export const filter: TFilter =
  <P>(pred: (x: P) => boolean) =>
  <N>(next: Reducer<P, N>) =>
  (res: N, x: P): N =>
    pred(x) ? next(res, x) : res;

export type TTake = <P>(count: number) => XForm<P, P>;
export const take: TTake =
  <P>(count: number) =>
  <N>(next: Reducer<P, N>) => {
    let left = count;
    return (res: N, x: P): N => {
      left--;

      return left < 0 ? reduced() : next(res, x);
    };
  };
