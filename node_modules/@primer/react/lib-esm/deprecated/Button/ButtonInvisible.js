import styled from 'styled-components';
import { get } from '../../constants.js';
import sx from '../../sx.js';
import ButtonBase from './ButtonBase.js';

const ButtonInvisible = styled(ButtonBase).withConfig({
  displayName: "ButtonInvisible",
  componentId: "sc-cy3rd6-0"
})(["color:", ";background-color:transparent;border:0;border-radius:", ";box-shadow:none;&:disabled{color:", ";}&:focus{outline:solid 2px ", ";}&:hover{background-color:", ";}&:active{background-color:", ";}", ""], get('colors.accent.fg'), get('radii.2'), get('colors.primer.fg.disabled'), get('colors.accent.fg'), get('colors.btn.hoverBg'), get('colors.btn.selectedBg'), sx);

export { ButtonInvisible as default };
