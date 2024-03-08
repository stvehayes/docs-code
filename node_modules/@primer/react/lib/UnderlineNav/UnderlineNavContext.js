'use strict';

var React = require('react');

const UnderlineNavContext = /*#__PURE__*/React.createContext({
  theme: {},
  setChildrenWidth: () => null,
  setNoIconChildrenWidth: () => null,
  loadingCounters: false,
  iconsVisible: true
});

exports.UnderlineNavContext = UnderlineNavContext;
