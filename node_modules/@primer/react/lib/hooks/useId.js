'use strict';

var React = require('react');

/**
 * Generate a unique id to be used in a component. If an `id` is provided, it
 * will be used instead.
 *
 * @param id - An optional value to be used instead of generating a unique id.
 * Useful when accepting an optional `id` as a prop in a component.
 */
function useId(id) {
  const uniqueId = React.useId();
  if (id) {
    return id;
  }
  return uniqueId;
}

exports.useId = useId;
