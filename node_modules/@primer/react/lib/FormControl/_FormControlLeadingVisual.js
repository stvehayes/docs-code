'use strict';

var React = require('react');
var Box = require('../Box/Box.js');
var constants = require('../constants.js');
var _FormControlContext = require('./_FormControlContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlLeadingVisual = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = _FormControlContext.useFormControlContext();
  return /*#__PURE__*/React__default.default.createElement(Box, {
    color: disabled ? 'fg.muted' : 'fg.default',
    sx: {
      '> *': {
        minWidth: captionId ? constants.get('fontSizes.4') : constants.get('fontSizes.2'),
        minHeight: captionId ? constants.get('fontSizes.4') : constants.get('fontSizes.2'),
        fill: 'currentColor'
      },
      ...sx
    },
    ml: 2
  }, children);
};
FormControlLeadingVisual.displayName = "FormControlLeadingVisual";

module.exports = FormControlLeadingVisual;
