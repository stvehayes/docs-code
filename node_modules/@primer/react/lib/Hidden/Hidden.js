'use strict';

var React = require('react');
var getBreakpointDeclarations = require('../utils/getBreakpointDeclarations.js');
var Box = require('../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

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
  const styles = getBreakpointDeclarations.getBreakpointDeclarations(normalize(when), 'display', () => 'none');
  // Render the children with the styles
  return styles ? /*#__PURE__*/React__default.default.createElement(Box, {
    sx: styles
  }, children) : null;
};
Hidden.displayName = 'Hidden';

exports.Hidden = Hidden;
