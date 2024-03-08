'use strict';

var styled = require('styled-components');
var sx = require('../../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const UnstyledTextInput = styled__default.default.input.withConfig({
  displayName: "UnstyledTextInput",
  componentId: "sc-14ypya-0"
})(["border:0;font-size:inherit;font-family:inherit;background-color:transparent;-webkit-appearance:none;color:inherit;width:100%;&:focus{outline:0;}", ";"], sx.default);

module.exports = UnstyledTextInput;
