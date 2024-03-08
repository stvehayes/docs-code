import { get } from './constants.js';
import styled, { css } from 'styled-components';
import Box from './Box/Box.js';
import Link from './Link/Link.js';
import React from 'react';
import clsx from 'clsx';
import sx from './sx.js';

function SideNavBase({
  variant = 'normal',
  className,
  bordered,
  children,
  'aria-label': ariaLabel
}) {
  const variantClassName = variant === 'lightweight' ? 'lightweight' : 'normal';
  const newClassName = clsx(className, `variant-${variantClassName}`);
  return /*#__PURE__*/React.createElement(Box, {
    borderWidth: bordered ? '1px' : 0,
    borderStyle: "solid",
    borderColor: "border.default",
    borderRadius: 2,
    as: "nav",
    className: newClassName,
    "aria-label": ariaLabel
  }, children);
}
SideNavBase.displayName = "SideNavBase";
const SideNav = styled(SideNavBase).withConfig({
  displayName: "SideNav",
  componentId: "sc-11f1jdr-0"
})(["background-color:", ";", " ", ";"], get('colors.canvas.subtle'), props => props.bordered && css(["& > &{border-left:0;border-right:0;border-bottom:0;}"]), sx);
// used for variant normal hover, focus pseudo selectors
const CommonAccessibilityVariantNormalStyles = css(["background-color:", ";text-decoration:none;"], get('colors.neutral.subtle'));

// used for light weight hover, focus pseudo selectors
const CommonAccessibilityVariantLightWeightStyles = css(["color:", ";text-decoration:none;"], get('colors.fg.default'));
const SideNavLink = styled(Link).attrs(props => {
  const isReactRouter = typeof props.to === 'string';
  if (isReactRouter || props.selected) {
    // according to their docs, NavLink supports aria-current:
    // https://reacttraining.com/react-router/web/api/NavLink/aria-current-string
    return {
      'aria-current': 'page'
    };
  } else {
    return {};
  }
}).withConfig({
  displayName: "SideNav__SideNavLink",
  componentId: "sc-11f1jdr-1"
})(["position:relative;display:block;", " width:100%;text-align:left;font-size:", ";& > ", "{border-bottom:none;}", ".variant-normal > &{color:", ";padding:", ";border:0;border-top:", " solid ", ";&:first-child{border-top:0;border-top-right-radius:", ";border-top-left-radius:", ";}&:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";}&::before{position:absolute;top:0;bottom:0;left:0;z-index:1;width:3px;pointer-events:none;content:'';}&:hover{", "}&:focus{", " outline:solid 2px ", ";z-index:1;}&[aria-current='page'],&[aria-selected='true']{background-color:", ";&::before{background-color:", ";}}}", ".variant-lightweight > &{padding:", " 0;color:", ";&:hover{", "}&:focus{", " outline:solid 1px ", ";z-index:1;}&[aria-current='page'],&[aria-selected='true']{color:", ";font-weight:", ";}}", ";"], props => props.variant === 'full' && css(["display:flex;align-items:center;justify-content:space-between;"]), get('fontSizes.1'), SideNav, SideNav, get('colors.fg.default'), get('space.3'), get('borderWidths.1'), get('colors.border.muted'), get('radii.2'), get('radii.2'), get('radii.2'), get('radii.2'), CommonAccessibilityVariantNormalStyles, CommonAccessibilityVariantNormalStyles, get('colors.accent.fg'), get('colors.sidenav.selectedBg'), get('colors.primer.border.active'), SideNav, get('space.1'), get('colors.accent.fg'), CommonAccessibilityVariantLightWeightStyles, CommonAccessibilityVariantLightWeightStyles, get('colors.accent.fg'), get('colors.fg.default'), get('fontWeights.semibold'), sx);
SideNavLink.displayName = 'SideNav.Link';
/** @deprecated Use [NavList](https://primer.style/react/NavList) instead */
var SideNav$1 = Object.assign(SideNav, {
  Link: SideNavLink
});

export { SideNav$1 as default };
