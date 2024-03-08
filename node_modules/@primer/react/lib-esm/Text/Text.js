import styled from 'styled-components';
import { TYPOGRAPHY, COMMON } from '../constants.js';
import sx from '../sx.js';

const Text = styled.span.withConfig({
  displayName: "Text",
  componentId: "sc-17v1xeu-0"
})(["", ";", ";", ";"], TYPOGRAPHY, COMMON, sx);

export { Text as default };
