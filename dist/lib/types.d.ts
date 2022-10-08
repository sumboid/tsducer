export declare type XForm<T, Q> = <N>(next: Reducer<Q, N>) => Reducer<T, N>;
export declare type Reducer<T, R> = (res: R, x: T) => R;
export declare class Reduced extends Error {
}
export declare const reduced: () => never;
