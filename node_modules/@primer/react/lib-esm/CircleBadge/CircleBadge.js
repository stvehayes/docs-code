import styled from 'styled-components';
import { get } from '../constants.js';
import Octicon from '../Octicon/Octicon.js';
import sx from '../sx.js';
import isNumeric from '../utils/isNumeric.js';

const variantSizes = {
  small: 56,
  medium: 96,
  large: 128
};
const sizeStyles = ({
  size,
  variant = 'medium'
}) => {
  const calc = isNumeric(size) ? size : variantSizes[variant];
  return {
    width: calc,
    height: calc
  };
};
const CircleBadge = styled.div.withConfig({
  displayName: "CircleBadge",
  componentId: "sc-nywehb-0"
})(["display:", ";align-items:center;justify-content:center;background-color:", ";border-radius:50%;box-shadow:", ";", ";", ";"], ({
  inline = false
}) => inline ? 'inline-flex' : 'flex', get('colors.canvas.default'), get('shadows.shadow.medium'), sizeStyles, sx);
const CircleBadgeIcon = styled(Octicon).withConfig({
  displayName: "CircleBadge__CircleBadgeIcon",
  componentId: "sc-nywehb-1"
})(["height:auto;max-width:60%;max-height:55%;"]);
CircleBadgeIcon.displayName = 'CircleBadge.Icon';
var CircleBadge$1 = Object.assign(CircleBadge, {
  Icon: CircleBadgeIcon
});

export { CircleBadge$1 as default };
