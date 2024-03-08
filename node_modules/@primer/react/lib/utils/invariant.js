'use strict';

function emptyFunction() {}

// Inspired by invariant by fbjs
// @see https://github.com/facebook/fbjs/blob/main/packages/fbjs/src/__forks__/invariant.js
const invariant = process.env.NODE_ENV !== "production" ?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function invariant(condition, format, ...args) {
  if (!condition) {
    let error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      let index = 0;
      const message = format.replace(/%s/g, () => {
        return args[index++];
      });
      error = new Error(message);
      error.name = 'Invariant Violation';
    }
    throw error;
  }
} : emptyFunction;

exports.invariant = invariant;
