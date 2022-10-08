"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...xfs) {
    return (reducer) => xfs.reverse().reduce((rf, xf) => xf(rf), reducer);
}
exports.compose = compose;
