import React from 'react';

const ItemContext = /*#__PURE__*/React.createContext({});
const getVariantStyles = (variant, disabled, inactive) => {
  if (disabled) {
    return {
      color: 'primer.fg.disabled',
      iconColor: 'primer.fg.disabled',
      annotationColor: 'primer.fg.disabled'
    };
  }
  if (inactive) {
    return {
      color: 'fg.muted',
      iconColor: 'fg.muted',
      annotationColor: 'fg.muted'
    };
  }
  switch (variant) {
    case 'danger':
      return {
        color: 'danger.fg',
        iconColor: 'danger.fg',
        annotationColor: 'fg.muted',
        hoverColor: 'actionListItem.danger.hoverText'
      };
    default:
      return {
        color: 'fg.default',
        iconColor: 'fg.muted',
        annotationColor: 'fg.muted',
        hoverColor: 'fg.default'
      };
  }
};
const TEXT_ROW_HEIGHT = '20px'; // custom value off the scale

const ListContext = /*#__PURE__*/React.createContext({});

export { ItemContext, ListContext, TEXT_ROW_HEIGHT, getVariantStyles };
