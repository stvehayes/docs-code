'use strict';

var styled = require('styled-components');
var constants = require('../../constants.js');
var sx = require('../../sx.js');
var ButtonBase = require('./ButtonBase.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const ButtonInvisible = styled__default.default(ButtonBase).withConfig({
  displayName: "ButtonInvisible",
  componentId: "sc-cy3rd6-0"
})(["color:", ";background-color:transparent;border:0;border-radius:", ";box-shadow:none;&:disabled{color:", ";}&:focus{outline:solid 2px ", ";}&:hover{background-color:", ";}&:active{background-color:", ";}", ""], constants.get('colors.accent.fg'), constants.get('radii.2'), constants.get('colors.primer.fg.disabled'), constants.get('colors.accent.fg'), constants.get('colors.btn.hoverBg'), constants.get('colors.btn.selectedBg'), sx.default);

module.exports = ButtonInvisible;
