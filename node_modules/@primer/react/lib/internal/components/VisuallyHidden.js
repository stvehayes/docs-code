'use strict';

var styled = require('styled-components');
var sx = require('../../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * Provides a component that implements the "visually hidden" technique. This is
 * analagous to the common `sr-only` class. Children that are rendered inside
 * this component will not be visible but will be available to screen readers.
 *
 * Note: if this component, or a descendant, has focus then this component will
 * no longer be visually hidden.
 *
 * @see https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack.html
 */
const VisuallyHidden = styled__default.default.div.withConfig({
  displayName: "VisuallyHidden",
  componentId: "sc-1sffg7y-0"
})(["&:not(:focus):not(:active):not(:focus-within){clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}", ""], sx.default);

exports.VisuallyHidden = VisuallyHidden;
