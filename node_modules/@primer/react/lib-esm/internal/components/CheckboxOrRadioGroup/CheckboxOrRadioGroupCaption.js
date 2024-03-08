import React from 'react';
import Text from '../../../Text/Text.js';
import CheckboxOrRadioGroupContext from './CheckboxOrRadioGroupContext.js';

const CheckboxOrRadioGroupCaption = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = React.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React.createElement(Text, {
    color: disabled ? 'fg.muted' : 'fg.subtle',
    fontSize: 1,
    id: captionId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupCaption.displayName = "CheckboxOrRadioGroupCaption";

export { CheckboxOrRadioGroupCaption as default };
