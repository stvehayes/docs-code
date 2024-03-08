'use strict';

var UnderlineNav$1 = require('./UnderlineNav.js');
var UnderlineNavItem = require('./UnderlineNavItem.js');

const UnderlineNav = Object.assign(UnderlineNav$1.UnderlineNav, {
  Item: UnderlineNavItem.UnderlineNavItem
});

exports.UnderlineNav = UnderlineNav;
