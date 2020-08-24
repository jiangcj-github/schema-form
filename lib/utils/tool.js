"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._is = void 0;

var _is = function _is(o, types) {
  return types.includes(Object.prototype.toString.call(o).slice(8, -1).toLowerCase());
};

exports._is = _is;