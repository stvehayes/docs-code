'use strict';

var styled = require('styled-components');
var constants = require('../../constants.js');
var sx = require('../../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const ButtonTableList = styled__default.default.summary.withConfig({
  displayName: "ButtonTableList",
  componentId: "sc-xbr2xd-0"
})(["display:inline-block;padding:0;font-size:", ";color:", ";text-decoration:none;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;&:hover{text-decoration:underline;}&:disabled{&,&:hover{color:", ";cursor:default;}}&:after{display:inline-block;margin-left:", ";width:0;height:0;vertical-align:-2px;content:'';border:4px solid transparent;border-top-color:currentcolor;}", ";"], constants.get('fontSizes.1'), constants.get('colors.fg.muted'), constants.get('colors.primer.fg.disabled'), constants.get('space.1'), sx.default);

module.exports = ButtonTableList;
