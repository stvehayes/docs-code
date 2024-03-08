'use strict';

var React = require('react');
var InputValidation = require('../internal/components/InputValidation.js');
var _FormControlContext = require('./_FormControlContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlValidation = ({
  children,
  variant,
  sx,
  id
}) => {
  const {
    validationMessageId
  } = _FormControlContext.useFormControlContext();
  return /*#__PURE__*/React__default.default.createElement(InputValidation, {
    validationStatus: variant,
    id: id || validationMessageId || '',
    sx: sx
  }, children);
};
FormControlValidation.displayName = "FormControlValidation";

module.exports = FormControlValidation;
