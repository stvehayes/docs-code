'use strict';

var styled = require('styled-components');
var sx = require('../../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * Provides an unstyled button that can be styled as-needed for components
 */
const Button = styled__default.default.button.withConfig({
  displayName: "ButtonReset__Button",
  componentId: "sc-1yqlmwf-0"
})(["padding:0;border:0;margin:0;display:inline-flex;padding:0;border:0;appearance:none;background:none;cursor:pointer;text-align:start;font:inherit;color:inherit;align-items:center;&::-moz-focus-inner{border:0;}", ""], sx.default);

exports.Button = Button;
