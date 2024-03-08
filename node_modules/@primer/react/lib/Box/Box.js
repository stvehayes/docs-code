'use strict';

var styled = require('styled-components');
var styledSystem = require('styled-system');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const Box = styled__default.default.div.withConfig({
  displayName: "Box",
  componentId: "sc-g0xbh4-0"
})(styledSystem.space, styledSystem.color, styledSystem.typography, styledSystem.layout, styledSystem.flexbox, styledSystem.grid, styledSystem.background, styledSystem.border, styledSystem.position, styledSystem.shadow, sx.default);

module.exports = Box;
