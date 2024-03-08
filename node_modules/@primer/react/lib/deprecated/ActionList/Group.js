'use strict';

var React = require('react');
var styled = require('styled-components');
var sx = require('../../sx.js');
var Header = require('./Header.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * Contract for props passed to the `Group` component.
 */

const StyledGroup = styled__default.default.div.withConfig({
  displayName: "Group__StyledGroup",
  componentId: "sc-1s2aw76-0"
})(["", ""], sx.default);

/**
 * Collects related `Items` in an `ActionList`.
 */
function Group({
  header,
  items,
  ...props
}) {
  return /*#__PURE__*/React__default.default.createElement(StyledGroup, props, header && /*#__PURE__*/React__default.default.createElement(Header.Header, header), items);
}
Group.displayName = "Group";

exports.Group = Group;
