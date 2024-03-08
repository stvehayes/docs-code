import React from 'react';
import Box from '../Box/Box.js';
import { get } from '../constants.js';
import { useFormControlContext } from './_FormControlContext.js';

const FormControlLeadingVisual = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = useFormControlContext();
  return /*#__PURE__*/React.createElement(Box, {
    color: disabled ? 'fg.muted' : 'fg.default',
    sx: {
      '> *': {
        minWidth: captionId ? get('fontSizes.4') : get('fontSizes.2'),
        minHeight: captionId ? get('fontSizes.4') : get('fontSizes.2'),
        fill: 'currentColor'
      },
      ...sx
    },
    ml: 2
  }, children);
};
FormControlLeadingVisual.displayName = "FormControlLeadingVisual";

export { FormControlLeadingVisual as default };
