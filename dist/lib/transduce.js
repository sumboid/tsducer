"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequence = exports.into = exports.transduce = exports.append = void 0;
const types_1 = require("./types");
const append = (res, x) => [...res, x];
exports.append = append;
const transduce = (xf, reducer, init) => (xs) => {
    let res = init;
    const form = xf(reducer);
    try {
        for (const x of xs) {
            res = form(res, x);
        }
    }
    catch (e) {
        if (!(e instanceof types_1.Reduced)) {
            throw e;
        }
    }
    return res;
};
exports.transduce = transduce;
const mappend = (res, x) => {
    res.push(x);
    return res;
};
const into = (to, xf) => (xs) => {
    let res = to.slice(0);
    const reducer = xf(mappend);
    try {
        for (const x of xs) {
            res = reducer(res, x);
        }
    }
    catch (e) {
        if (!(e instanceof types_1.Reduced)) {
            throw e;
        }
    }
    return res;
};
exports.into = into;
const sequence = (xf, xs) => {
    const reducer = xf(mappend);
    return (function* () {
        try {
            for (const x of xs) {
                const res = reducer([], x);
                if (res.length === 0) {
                    continue;
                }
                yield res[0];
            }
        }
        catch (e) {
            if (!(e instanceof types_1.Reduced)) {
                throw e;
            }
        }
    })();
};
exports.sequence = sequence;
