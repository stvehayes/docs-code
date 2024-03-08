'use strict';

var React = require('react');
var InputValidation = require('../InputValidation.js');
var CheckboxOrRadioGroupContext = require('./CheckboxOrRadioGroupContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const CheckboxOrRadioGroupValidation = ({
  children,
  variant,
  sx
}) => {
  const {
    validationMessageId = ''
  } = React__default.default.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.default.createElement(InputValidation, {
    validationStatus: variant,
    id: validationMessageId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupValidation.displayName = "CheckboxOrRadioGroupValidation";

module.exports = CheckboxOrRadioGroupValidation;
