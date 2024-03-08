'use strict';

var styled = require('styled-components');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const Details = styled__default.default.details.withConfig({
  displayName: "Details",
  componentId: "sc-1jjccgx-0"
})(["& > summary{list-style:none;}& > summary::-webkit-details-marker{display:none;}", ";"], sx.default);
Details.displayName = 'Details';

module.exports = Details;
