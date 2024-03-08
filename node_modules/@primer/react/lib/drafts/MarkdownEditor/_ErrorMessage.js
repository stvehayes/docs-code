'use strict';

var React = require('react');
var Flash = require('../../Flash/Flash.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const ErrorMessage = /*#__PURE__*/React.memo(({
  message
}) => /*#__PURE__*/React__default.default.createElement(Flash, {
  "aria-live": "polite",
  variant: "danger",
  full: true,
  sx: {
    fontSize: 1,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    px: 2,
    py: 2
  }
}, message));

exports.ErrorMessage = ErrorMessage;
