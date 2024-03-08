import React from 'react';
import Box from '../../../Box/Box.js';
import VisuallyHidden from '../../../_VisuallyHidden.js';
import CheckboxOrRadioGroupContext from './CheckboxOrRadioGroupContext.js';

const CheckboxOrRadioGroupLabel = ({
  children,
  visuallyHidden = false,
  sx
}) => {
  const {
    required,
    disabled
  } = React.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React.createElement(VisuallyHidden, {
    isVisible: !visuallyHidden,
    title: required ? 'required field' : undefined,
    sx: {
      display: 'block',
      color: disabled ? 'fg.muted' : undefined,
      fontSize: 2,
      ...sx
    }
  }, required ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    as: "span"
  }, /*#__PURE__*/React.createElement(Box, {
    mr: 1
  }, children), /*#__PURE__*/React.createElement("span", null, "*")) : children);
};
CheckboxOrRadioGroupLabel.displayName = "CheckboxOrRadioGroupLabel";

export { CheckboxOrRadioGroupLabel as default };
