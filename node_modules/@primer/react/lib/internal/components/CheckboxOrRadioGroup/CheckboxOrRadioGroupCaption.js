'use strict';

var React = require('react');
var Text = require('../../../Text/Text.js');
var CheckboxOrRadioGroupContext = require('./CheckboxOrRadioGroupContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const CheckboxOrRadioGroupCaption = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = React__default.default.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.default.createElement(Text, {
    color: disabled ? 'fg.muted' : 'fg.subtle',
    fontSize: 1,
    id: captionId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupCaption.displayName = "CheckboxOrRadioGroupCaption";

module.exports = CheckboxOrRadioGroupCaption;
