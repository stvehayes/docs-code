'use strict';

var React = require('react');
var InputCaption = require('../internal/components/InputCaption.js');
var _FormControlContext = require('./_FormControlContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlCaption = ({
  children,
  sx,
  id
}) => {
  const {
    captionId,
    disabled
  } = _FormControlContext.useFormControlContext();
  return /*#__PURE__*/React__default.default.createElement(InputCaption, {
    id: id || captionId || '',
    disabled: disabled,
    sx: sx
  }, children);
};
FormControlCaption.displayName = "FormControlCaption";

module.exports = FormControlCaption;
