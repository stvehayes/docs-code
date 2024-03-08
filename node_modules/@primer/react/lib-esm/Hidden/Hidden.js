import React from 'react';
import { getBreakpointDeclarations } from '../utils/getBreakpointDeclarations.js';
import Box from '../Box/Box.js';

/* Normalize the value that is received from the prop `when`.
 * For array types : ['narrow', 'wide'] -> {narrow: true, wide: true}
 * For string types: 'narrow' -> {narrow: true}
 */
function normalize(hiddenViewports) {
  // For array types
  if (Array.isArray(hiddenViewports)) {
    const breakpoints = {};
    // ['narrow', 'wide'] -> {narrow: true, wide: true}
    for (const breakpoint of hiddenViewports) {
      breakpoints[breakpoint] = true;
    }
    return breakpoints;
  }
  // For string types
  // 'narrow' -> {narrow: true}
  return {
    [hiddenViewports]: true
  };
}
const Hidden = ({
  when,
  children
}) => {
  // Get breakpoint declarations for the normalized ResponsiveValue object
  const styles = getBreakpointDeclarations(normalize(when), 'display', () => 'none');
  // Render the children with the styles
  return styles ? /*#__PURE__*/React.createElement(Box, {
    sx: styles
  }, children) : null;
};
Hidden.displayName = 'Hidden';

export { Hidden };
