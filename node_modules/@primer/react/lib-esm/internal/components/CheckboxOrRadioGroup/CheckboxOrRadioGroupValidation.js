import React from 'react';
import InputValidation from '../InputValidation.js';
import CheckboxOrRadioGroupContext from './CheckboxOrRadioGroupContext.js';

const CheckboxOrRadioGroupValidation = ({
  children,
  variant,
  sx
}) => {
  const {
    validationMessageId = ''
  } = React.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React.createElement(InputValidation, {
    validationStatus: variant,
    id: validationMessageId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupValidation.displayName = "CheckboxOrRadioGroupValidation";

export { CheckboxOrRadioGroupValidation as default };
