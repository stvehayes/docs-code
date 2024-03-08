'use strict';

var React = require('react');
var Box = require('../../Box/Box.js');
var Spinner = require('../../Spinner/Spinner.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const TextInputInnerVisualSlot = ({
  children,
  hasLoadingIndicator,
  showLoadingIndicator,
  visualPosition
}) => {
  if (!children && !hasLoadingIndicator || visualPosition === 'leading' && !children && !showLoadingIndicator) {
    return null;
  }
  if (!hasLoadingIndicator) {
    return /*#__PURE__*/React__default.default.createElement("span", {
      className: "TextInput-icon"
    }, children);
  }
  return /*#__PURE__*/React__default.default.createElement("span", {
    className: "TextInput-icon"
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    display: "flex",
    position: "relative"
  }, children && /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      visibility: showLoadingIndicator ? 'hidden' : 'visible'
    }
  }, children), /*#__PURE__*/React__default.default.createElement(Spinner, {
    sx: children ? {
      position: 'absolute',
      top: 0,
      height: '100%',
      maxWidth: '100%',
      visibility: showLoadingIndicator ? 'visible' : 'hidden',
      ...(visualPosition === 'leading' ? {
        left: 0
      } : {
        right: 0
      })
    } : {
      visibility: showLoadingIndicator ? 'visible' : 'hidden'
    },
    size: children ? undefined : 'small'
  })));
};
TextInputInnerVisualSlot.displayName = "TextInputInnerVisualSlot";

module.exports = TextInputInnerVisualSlot;
