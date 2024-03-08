import React from 'react';
import InputCaption from '../internal/components/InputCaption.js';
import { useFormControlContext } from './_FormControlContext.js';

const FormControlCaption = ({
  children,
  sx,
  id
}) => {
  const {
    captionId,
    disabled
  } = useFormControlContext();
  return /*#__PURE__*/React.createElement(InputCaption, {
    id: id || captionId || '',
    disabled: disabled,
    sx: sx
  }, children);
};
FormControlCaption.displayName = "FormControlCaption";

export { FormControlCaption as default };
