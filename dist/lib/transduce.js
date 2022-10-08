"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transduce = exports.append = void 0;
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
