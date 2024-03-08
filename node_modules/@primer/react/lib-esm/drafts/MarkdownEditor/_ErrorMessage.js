import React, { memo } from 'react';
import Flash from '../../Flash/Flash.js';

const ErrorMessage = /*#__PURE__*/memo(({
  message
}) => /*#__PURE__*/React.createElement(Flash, {
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

export { ErrorMessage };
