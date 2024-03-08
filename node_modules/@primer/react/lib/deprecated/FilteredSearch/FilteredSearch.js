'use strict';

var styled = require('styled-components');
var constants = require('../../constants.js');
var sx = require('../../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * @deprecated A new filter component is in progress.
 * Until the new filter component is ready, you can use Button + TextInput + ActionList to reproduce this pattern.
 */
const FilteredSearch = styled__default.default.div.withConfig({
  displayName: "FilteredSearch",
  componentId: "sc-1lfsrbw-0"
})(["display:flex;align-items:stretch;summary,> button{border-radius:0;border-top-left-radius:", ";border-bottom-left-radius:", ";border-right:0;}.TextInput-wrapper{border-radius:0;border-top-right-radius:", ";border-bottom-right-radius:", ";}", ""], constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), constants.get('radii.2'), sx.default);

module.exports = FilteredSearch;
