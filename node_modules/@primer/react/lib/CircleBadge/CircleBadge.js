'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var Octicon = require('../Octicon/Octicon.js');
var sx = require('../sx.js');
var isNumeric = require('../utils/isNumeric.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const variantSizes = {
  small: 56,
  medium: 96,
  large: 128
};
const sizeStyles = ({
  size,
  variant = 'medium'
}) => {
  const calc = isNumeric(size) ? size : variantSizes[variant];
  return {
    width: calc,
    height: calc
  };
};
const CircleBadge = styled__default.default.div.withConfig({
  displayName: "CircleBadge",
  componentId: "sc-nywehb-0"
})(["display:", ";align-items:center;justify-content:center;background-color:", ";border-radius:50%;box-shadow:", ";", ";", ";"], ({
  inline = false
}) => inline ? 'inline-flex' : 'flex', constants.get('colors.canvas.default'), constants.get('shadows.shadow.medium'), sizeStyles, sx.default);
const CircleBadgeIcon = styled__default.default(Octicon).withConfig({
  displayName: "CircleBadge__CircleBadgeIcon",
  componentId: "sc-nywehb-1"
})(["height:auto;max-width:60%;max-height:55%;"]);
CircleBadgeIcon.displayName = 'CircleBadge.Icon';
var CircleBadge$1 = Object.assign(CircleBadge, {
  Icon: CircleBadgeIcon
});

module.exports = CircleBadge$1;
