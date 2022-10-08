import { XForm } from './types';
export declare function compose<T1, T2, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, R>): XForm<T1, R>;
export declare function compose<T1, T2, T3, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, T3>, xf2: XForm<T3, R>): XForm<T1, R>;
export declare function compose<T1, T2, T3, T4, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, T3>, xf2: XForm<T3, T4>, xf3: XForm<T4, R>): XForm<T1, R>;
export declare function compose<T1, T2, T3, T4, T5, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, T3>, xf2: XForm<T3, T4>, xf3: XForm<T4, T5>, xf4: XForm<T5, R>): XForm<T1, R>;
export declare function compose<T1, T2, T3, T4, T5, T6, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, T3>, xf2: XForm<T3, T4>, xf3: XForm<T4, T5>, xf4: XForm<T5, T6>, xf5: XForm<T6, R>): XForm<T1, R>;
export declare function compose<T1, T2, T3, T4, T5, T6, T7, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, T3>, xf2: XForm<T3, T4>, xf3: XForm<T4, T5>, xf4: XForm<T5, T6>, xf5: XForm<T6, T7>, xf6: XForm<T7, R>): XForm<T1, R>;
export declare function compose<T1, T2, T3, T4, T5, T6, T7, T8, R>(xf0: XForm<T1, T2>, xf1: XForm<T2, T3>, xf2: XForm<T3, T4>, xf3: XForm<T4, T5>, xf4: XForm<T5, T6>, xf5: XForm<T6, T7>, xf6: XForm<T7, T8>, xf7: XForm<T8, R>): XForm<T1, R>;
