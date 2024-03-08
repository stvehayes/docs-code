'use strict';

var styled = require('styled-components');
var constants = require('../../constants.js');
var sx = require('../../sx.js');
var ButtonBase = require('./ButtonBase.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/** @deprecated Use the new Label instead. See https://primer.style/react/Button for more details. */
const Button = styled__default.default(ButtonBase).withConfig({
  displayName: "Button",
  componentId: "sc-ybpnzh-0"
})(["color:", ";background-color:", ";border:1px solid ", ";box-shadow:", ",", ";&:hover{background-color:", ";border-color:", ";}&:focus{outline:solid 2px ", ";}&:active{background-color:", ";box-shadow:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", ";"], constants.get('colors.btn.text'), constants.get('colors.btn.bg'), constants.get('colors.btn.border'), constants.get('shadows.btn.shadow'), constants.get('shadows.btn.insetShadow'), constants.get('colors.btn.hoverBg'), constants.get('colors.btn.hoverBorder'), constants.get('colors.accent.fg'), constants.get('colors.btn.selectedBg'), constants.get('shadows.btn.shadowActive'), constants.get('colors.primer.fg.disabled'), constants.get('colors.btn.bg'), constants.get('colors.btn.border'), sx.default);

module.exports = Button;
