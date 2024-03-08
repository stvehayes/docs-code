'use strict';

var React = require('react');
var styled = require('styled-components');
var Box = require('../../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const fadeIn = styled.keyframes(["0%{opacity:0;transform:translateY(-100%);}100%{opacity:1;transform:translateY(0);}"]);
// using easeOutQuint easing fn https://easings.net/#easeOutQuint
const AnimatedElement = styled__default.default.div.withConfig({
  displayName: "ValidationAnimationContainer__AnimatedElement",
  componentId: "sc-8z5a3g-0"
})(["animation:", ";@media (prefers-reduced-motion){animation:none;}"], props => props.show && styled.css(["170ms ", " cubic-bezier(0.44,0.74,0.36,1);"], fadeIn));
const ValidationAnimationContainer = ({
  show,
  children
}) => {
  const [shouldRender, setRender] = React.useState(show);
  React.useEffect(() => {
    if (show) setRender(true);
  }, [show]);
  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };
  return shouldRender ? /*#__PURE__*/React__default.default.createElement(Box, {
    height: show ? 'auto' : 0,
    overflow: "hidden"
  }, /*#__PURE__*/React__default.default.createElement(AnimatedElement, {
    show: show,
    onAnimationEnd: onAnimationEnd
  }, children)) : null;
};

module.exports = ValidationAnimationContainer;
