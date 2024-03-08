'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const Header = styled__default.default.header.withConfig({
  displayName: "Header",
  componentId: "sc-1wu4agm-0"
})(["z-index:32;display:flex;padding:", ";font-size:", ";line-height:", ";color:", ";background-color:", ";align-items:center;flex-wrap:nowrap;", ";"], constants.get('space.3'), constants.get('fontSizes.1'), constants.get('lineHeights.default'), constants.get('colors.header.text'), constants.get('colors.header.bg'), sx.default);
const HeaderItem = styled__default.default.div.withConfig({
  displayName: "Header__HeaderItem",
  componentId: "sc-1wu4agm-1"
})(["display:flex;margin-right:", ";align-self:stretch;align-items:center;flex-wrap:nowrap;", ";", ";"], constants.get('space.3'), ({
  full
}) => full && styled.css(["flex:auto;"]), sx.default);
HeaderItem.displayName = 'Header.Item';
const HeaderLink = styled__default.default.a.attrs(({
  to
}) => {
  const isReactRouter = typeof to === 'string';
  if (isReactRouter) {
    // according to their docs, NavLink supports aria-current:
    // https://reacttraining.com/react-router/web/api/NavLink/aria-current-string
    return {
      'aria-current': 'page'
    };
  } else {
    return {};
  }
}).withConfig({
  displayName: "Header__HeaderLink",
  componentId: "sc-1wu4agm-2"
})(["font-weight:", ";color:", ";white-space:nowrap;cursor:pointer;text-decoration:none;display:flex;align-items:center;&:hover,&:focus{color:", ";}", ";"], constants.get('fontWeights.bold'), constants.get('colors.header.logo'), constants.get('colors.header.text'), sx.default);
HeaderLink.displayName = 'Header.Link';
var Header$1 = Object.assign(Header, {
  Link: HeaderLink,
  Item: HeaderItem
});

module.exports = Header$1;
