'use strict';

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// Inspired from reach-ui: https://github.com/reach/reach-ui/blob/develop/packages/utils/src/use-force-update.ts
const useForceUpdate = () => {
  const [, rerender] = React__default.default.useState({});
  return React__default.default.useCallback(() => rerender({}), []);
};

exports.useForceUpdate = useForceUpdate;
