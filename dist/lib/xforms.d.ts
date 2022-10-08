import { XForm } from './types';
export declare type TMap = <P, Q>(f: (x: P) => Q) => XForm<P, Q>;
export declare const map: TMap;
export declare type TFilter = <P>(pred: (x: P) => boolean) => XForm<P, P>;
export declare const filter: TFilter;
export declare type TTake = <P>(count: number) => XForm<P, P>;
export declare const take: TTake;
