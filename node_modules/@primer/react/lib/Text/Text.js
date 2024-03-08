'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const Text = styled__default.default.span.withConfig({
  displayName: "Text",
  componentId: "sc-17v1xeu-0"
})(["", ";", ";", ";"], constants.TYPOGRAPHY, constants.COMMON, sx.default);

module.exports = Text;
