"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = exports.filter = exports.map = void 0;
const types_1 = require("./types");
const map = (f) => (next) => (res, x) => next(res, f(x));
exports.map = map;
const filter = (pred) => (next) => (res, x) => pred(x) ? next(res, x) : res;
exports.filter = filter;
const take = (count) => (next) => {
    let left = count;
    return (res, x) => {
        left--;
        return left < 0 ? (0, types_1.reduced)() : next(res, x);
    };
};
exports.take = take;
