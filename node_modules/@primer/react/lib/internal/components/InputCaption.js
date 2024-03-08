'use strict';

var React = require('react');
var Text = require('../../Text/Text.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const InputCaption = ({
  children,
  disabled,
  id,
  sx
}) => /*#__PURE__*/React__default.default.createElement(Text, {
  color: disabled ? 'fg.subtle' : 'fg.muted',
  display: "block",
  fontSize: 0,
  id: id,
  sx: sx
}, children);
InputCaption.displayName = "InputCaption";

module.exports = InputCaption;
