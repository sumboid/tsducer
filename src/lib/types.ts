export type XForm<T, Q> = <N>(next: Reducer<Q, N>) => Reducer<T, N>;
export type Reducer<T, R> = (res: R, x: T) => R;

export class Reduced extends Error {}
export const reduced = () => {
  throw new Reduced();
};
