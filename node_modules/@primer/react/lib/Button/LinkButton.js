'use strict';

var React = require('react');
var ButtonBase = require('./ButtonBase.js');
var defaultSxProp = require('../utils/defaultSxProp.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const LinkButton = /*#__PURE__*/React.forwardRef(({
  children,
  as: Component = 'a',
  sx = defaultSxProp.defaultSxProp,
  ...props
}, forwardedRef) => {
  return /*#__PURE__*/React__default.default.createElement(ButtonBase.ButtonBase, _extends({
    as: Component
    // @ts-expect-error ButtonBase wants both Anchor and Button refs
    ,
    ref: forwardedRef,
    sx: sx
  }, props), children);
});

exports.LinkButton = LinkButton;
