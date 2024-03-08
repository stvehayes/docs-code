import theme from '../theme.js';

// TODO: Update the hard-coded values when the primitives are ready
const PrimerBreakpoints = {
  xsmall: {
    width: '320px'
  },
  small: {
    width: theme.breakpoints[0]
  },
  medium: {
    width: theme.breakpoints[1]
  },
  large: {
    width: theme.breakpoints[2]
  },
  xlarge: {
    width: theme.breakpoints[3]
  },
  xxlarge: {
    width: '1400px'
  }
};
function breakpointHigher(width) {
  return `@media screen and (min-width: ${width})`;
}
function breakpointLower(width) {
  return `@media screen and (max-width: calc(${width} - 0.02px))`;
}

// Media queries associated with Primer viewport ranges.
const mediaQueries = {
  narrow: breakpointLower(PrimerBreakpoints.medium.width),
  // @media screen and (max-width: 768px - 0.02px) // < 768px (max-with is inclusive)
  regular: breakpointHigher(PrimerBreakpoints.medium.width),
  // @media screen and (min-width: 768) // >= 768px
  wide: breakpointHigher(PrimerBreakpoints.xxlarge.width) // (min-width: 1400px) // >= 1400px
};

export { PrimerBreakpoints, breakpointHigher, breakpointLower, mediaQueries };
