'use strict';

var React = require('react');
var reactIntersectionObserver = require('react-intersection-observer');
var environment = require('../utils/environment.js');
var useIsomorphicLayoutEffect = require('../utils/useIsomorphicLayoutEffect.js');
var scroll = require('../utils/scroll.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

/**
 * Calculates the height of the sticky pane such that it always
 * fits into the viewport even when the header or footer are visible.
 */
function useStickyPaneHeight() {
  const rootRef = React__default.default.useRef(null);

  // Default the height to the viewport height
  const [height, setHeight] = React__default.default.useState(dvh(100));
  const [offsetHeader, setOffsetHeader] = React__default.default.useState(0);

  // Create intersection observers to track the top and bottom of the content region
  const [contentTopRef, contentTopInView, contentTopEntry] = reactIntersectionObserver.useInView();
  const [contentBottomRef, contentBottomInView] = reactIntersectionObserver.useInView();

  // Calculate the height of the sticky pane based on the position of the
  // top and bottom of the content region
  const calculateHeight = React__default.default.useCallback(() => {
    // Uncomment to debug
    // console.log('Recalculating pane height...')

    let calculatedHeight = '';
    const scrollContainer = scroll.getScrollContainer(rootRef.current);
    const topRect = contentTopEntry === null || contentTopEntry === void 0 ? void 0 : contentTopEntry.target.getBoundingClientRect();

    // Custom sticky header's height with units
    const offsetHeaderWithUnits = typeof offsetHeader === 'number' ? `${offsetHeader}px` : offsetHeader;
    if (scrollContainer) {
      const scrollRect = scrollContainer.getBoundingClientRect();
      const topOffset = topRect ? Math.max(topRect.top - scrollRect.top, 0) : 0;
      calculatedHeight = `calc(${scrollRect.height}px - (max(${topOffset}px, ${offsetHeaderWithUnits})))`;
    } else {
      const topOffset = topRect ? Math.max(topRect.top, 0) : 0;
      calculatedHeight = `calc(${dvh(100)} - (max(${topOffset}px, ${offsetHeaderWithUnits})))`;
    }
    setHeight(calculatedHeight);
  }, [contentTopEntry, offsetHeader]);

  // We only want to add scroll and resize listeners if the pane is sticky.
  // Since hooks can't be called conditionally, we need to use state to track
  // if the pane is sticky.
  const [isEnabled, setIsEnabled] = React__default.default.useState(false);
  useIsomorphicLayoutEffect(() => {
    const scrollContainer = scroll.getScrollContainer(rootRef.current);
    if (isEnabled && (contentTopInView || contentBottomInView)) {
      calculateHeight();

      // Start listeners if the top or the bottom edge of the content region is visible

      if (scrollContainer) {
        // eslint-disable-next-line github/prefer-observers
        scrollContainer.addEventListener('scroll', calculateHeight);
      } else {
        // eslint-disable-next-line github/prefer-observers
        window.addEventListener('scroll', calculateHeight);
      }

      // eslint-disable-next-line github/prefer-observers
      window.addEventListener('resize', calculateHeight);
    }
    return () => {
      // Stop listeners if neither the top nor the bottom edge of the content region is visible

      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', calculateHeight);
      } else {
        window.removeEventListener('scroll', calculateHeight);
      }
      window.removeEventListener('resize', calculateHeight);
    };
  }, [isEnabled, contentTopInView, contentBottomInView, calculateHeight]);
  function enableStickyPane(top) {
    setIsEnabled(true);
    setOffsetHeader(top);
  }
  function disableStickyPane() {
    setIsEnabled(false);
  }
  return {
    rootRef,
    enableStickyPane,
    disableStickyPane,
    contentTopRef,
    contentBottomRef,
    stickyPaneHeight: height
  };
}

// TODO: there is currently an issue with dvh on Desktop Safari 15.6, 16.0. To
// work around it, we check to see if the device supports touch along with the
// dvh unit in order to target iPad. When the bug is addressed this check will
// no longer be needed
//
// @see https://bugs.webkit.org/show_bug.cgi?id=242758
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const supportsTouchCallout = environment.canUseDOM ? CSS.supports('-webkit-touch-callout', 'none') : false;
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const supportsDVH = environment.canUseDOM ? CSS.supports('max-height', '100dvh') && supportsTouchCallout : false;

/**
 * Convert the given value to a dvh value, if supported, otherwise it falls back
 * to vh
 */
function dvh(value) {
  if (supportsDVH) {
    return `${value}dvh`;
  }
  return `${value}vh`;
}

exports.useStickyPaneHeight = useStickyPaneHeight;
