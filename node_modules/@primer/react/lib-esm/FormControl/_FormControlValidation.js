import React from 'react';
import InputValidation from '../internal/components/InputValidation.js';
import { useFormControlContext } from './_FormControlContext.js';

const FormControlValidation = ({
  children,
  variant,
  sx,
  id
}) => {
  const {
    validationMessageId
  } = useFormControlContext();
  return /*#__PURE__*/React.createElement(InputValidation, {
    validationStatus: variant,
    id: id || validationMessageId || '',
    sx: sx
  }, children);
};
FormControlValidation.displayName = "FormControlValidation";

export { FormControlValidation as default };
