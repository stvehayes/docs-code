'use strict';

function emptyFunction() {}
const warn = process.env.NODE_ENV !== "production" ? function warn(message) {
  // eslint-disable-next-line no-console
  console.warn('Warning:', message);
} : emptyFunction;

// Inspired by warning by fbjs
// @see https://github.com/facebook/fbjs/blob/main/packages/fbjs/src/__forks__/warning.js
const warning = process.env.NODE_ENV !== "production" ?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function warning(condition, format, ...args) {
  if (condition) {
    let index = 0;
    const message = format.replace(/%s/g, () => {
      return args[index++];
    });
    warn(message);
  }
} : emptyFunction;

exports.warn = warn;
exports.warning = warning;
