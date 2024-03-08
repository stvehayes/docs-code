'use strict';

var React = require('react');
var Box = require('../Box/Box.js');
var constants = require('../constants.js');
require('@styled-system/css');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

/**
 * Visually separates `Item`s or `Group`s in an `ActionList`.
 */
const Divider = ({
  sx = {}
}) => {
  return /*#__PURE__*/React__default.default.createElement(Box, {
    as: "li",
    "aria-hidden": "true",
    sx: merge__default.default({
      height: 1,
      backgroundColor: 'actionListItem.inlineDivider',
      marginTop: theme => `calc(${constants.get('space.2')(theme)} - 1px)`,
      marginBottom: 2,
      listStyle: 'none' // hide the ::marker inserted by browser's stylesheet
    }, sx),
    "data-component": "ActionList.Divider"
  });
};
Divider.displayName = "Divider";

exports.Divider = Divider;
