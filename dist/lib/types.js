"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduced = exports.Reduced = void 0;
class Reduced extends Error {
}
exports.Reduced = Reduced;
const reduced = () => {
    throw new Reduced();
};
exports.reduced = reduced;
