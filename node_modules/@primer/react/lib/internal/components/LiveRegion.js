'use strict';

var React = require('react');
var VisuallyHidden = require('./VisuallyHidden.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const LiveRegionContext = /*#__PURE__*/React__default.default.createContext(null);
function useLiveRegion() {
  const context = React__default.default.useContext(LiveRegionContext);
  if (!context) {
    throw new Error('useLiveRegion() must be used within a <LiveRegion>');
  }
  return context;
}
function LiveRegion({
  children
}) {
  const [message, setMessage] = React__default.default.useState('');
  const value = React__default.default.useMemo(() => {
    return {
      announce: setMessage,
      message
    };
  }, [message]);
  return /*#__PURE__*/React__default.default.createElement(LiveRegionContext.Provider, {
    value: value
  }, children);
}
LiveRegion.displayName = "LiveRegion";
function LiveRegionOutlet() {
  const liveRegion = useLiveRegion();
  return /*#__PURE__*/React__default.default.createElement(VisuallyHidden.VisuallyHidden, {
    role: "status",
    "aria-live": "polite",
    "aria-atomic": true
  }, liveRegion.message);
}
LiveRegionOutlet.displayName = "LiveRegionOutlet";
function Message({
  value
}) {
  const liveRegion = useLiveRegion();
  const savedLiveRegion = React__default.default.useRef(liveRegion);
  const committedRef = React__default.default.useRef(false);
  React__default.default.useEffect(() => {
    savedLiveRegion.current = liveRegion;
  }, [liveRegion]);
  React__default.default.useEffect(() => {
    if (committedRef.current !== true) {
      return;
    }
    const timeoutId = setTimeout(() => {
      savedLiveRegion.current.announce(value);
    }, 750);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);
  React__default.default.useEffect(() => {
    committedRef.current = true;
    return () => {
      committedRef.current = false;
    };
  }, []);
  return null;
}

exports.LiveRegion = LiveRegion;
exports.LiveRegionOutlet = LiveRegionOutlet;
exports.Message = Message;
exports.useLiveRegion = useLiveRegion;
