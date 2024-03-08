import styled from 'styled-components';
import { space, color, typography, layout, flexbox, grid, background, border, position, shadow } from 'styled-system';
import sx from '../sx.js';

const Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "sc-g0xbh4-0"
})(space, color, typography, layout, flexbox, grid, background, border, position, shadow, sx);

export { Box as default };
