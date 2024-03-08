'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const Pagehead = styled__default.default.div.withConfig({
  displayName: "Pagehead",
  componentId: "sc-diawfz-0"
})(["position:relative;padding-top:", ";padding-bottom:", ";margin-bottom:", ";border-bottom:1px solid ", ";", ";"], constants.get('space.4'), constants.get('space.4'), constants.get('space.4'), constants.get('colors.border.default'), sx.default);

module.exports = Pagehead;
