'use strict';

var React = require('react');
var useSafeTimeout = require('../hooks/useSafeTimeout.js');
var shared = require('./shared.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function useTypeahead({
  containerRef,
  onFocusChange
}) {
  const searchValue = React__default.default.useRef('');
  const timeoutRef = React__default.default.useRef(0);
  const onFocusChangeRef = React__default.default.useRef(onFocusChange);
  const {
    safeSetTimeout,
    safeClearTimeout
  } = useSafeTimeout();

  // Update the ref when the callback changes
  React__default.default.useEffect(() => {
    onFocusChangeRef.current = onFocusChange;
  }, [onFocusChange]);

  // Focus the closest element that matches the search value
  const focusSearchValue = React__default.default.useCallback(searchValue => {
    // Don't change focus if the search value is empty
    if (!searchValue) return;
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Get focusable elements
    const elements = Array.from(container.querySelectorAll('[role="treeitem"]'));

    // Get the index of active element
    const activeIndex = elements.findIndex(element => element === document.activeElement);

    // Wrap the array elements such that the active descendant is at the beginning
    let sortedElements = wrapArray(elements, activeIndex);

    // Remove the active descendant from the beginning of the array
    // when the user initiates a new search
    if (searchValue.length === 1) {
      sortedElements = sortedElements.slice(1);
    }

    // Find the first element that matches the search value
    const nextElement = sortedElements.find(element => {
      const name = shared.getAccessibleName(element).toLowerCase();
      return name.startsWith(searchValue.toLowerCase());
    });

    // If a match is found, focus it
    if (nextElement) {
      onFocusChangeRef.current(nextElement);
    }
  }, [containerRef]);

  // Update the search value when the user types
  React__default.default.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    function onKeyDown(event) {
      // Ignore key presses that don't produce a character value
      if (!event.key || event.key.length > 1) return;

      // Ignore key presses that occur with a modifier
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      // Update the existing search value with the new key press
      searchValue.current += event.key;
      focusSearchValue(searchValue.current);

      // Reset the timeout
      safeClearTimeout(timeoutRef.current);
      timeoutRef.current = safeSetTimeout(() => searchValue.current = '', 300);

      // Prevent default behavior
      event.preventDefault();
      event.stopPropagation();
    }
    container.addEventListener('keydown', onKeyDown);
    return () => container.removeEventListener('keydown', onKeyDown);
  }, [containerRef, focusSearchValue, safeClearTimeout, safeSetTimeout]);
}

/**
 * Wraps an array around itself at a given start index
 *
 * @example
 * wrapArray(['a', 'b', 'c', 'd'], 2) // ['c', 'd', 'a', 'b']
 */
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}

exports.useTypeahead = useTypeahead;
