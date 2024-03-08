'use strict';

var React = require('react');
var Box = require('../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function CircleOcticon(props) {
  const {
    size = 32,
    as,
    icon: IconComponent,
    bg,
    ...rest
  } = props;
  return /*#__PURE__*/React__default.default.createElement(Box, {
    as: as,
    bg: bg,
    overflow: "hidden",
    borderWidth: 0,
    size: size,
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "border.default"
  }, /*#__PURE__*/React__default.default.createElement(Box, _extends({
    display: "flex",
    as: as,
    size: size
  }, rest, {
    alignItems: "center",
    justifyContent: "center"
  }), /*#__PURE__*/React__default.default.createElement(IconComponent, {
    size: size
  })));
}
CircleOcticon.displayName = "CircleOcticon";

module.exports = CircleOcticon;
