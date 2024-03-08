'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var css = require('@styled-system/css');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var css__default = /*#__PURE__*/_interopDefault(css);
var merge__default = /*#__PURE__*/_interopDefault(merge);

// Support CSS custom properties in the `sx` prop

const sx = props => css__default.default(props.sx);

Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () { return merge__default.default; }
});
exports.default = sx;
