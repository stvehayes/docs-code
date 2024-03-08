'use strict';

var React = require('react');
var useIsomorphicLayoutEffect = require('../utils/useIsomorphicLayoutEffect.js');

// https://gist.github.com/strothj/708afcf4f01dd04de8f49c92e88093c3

function useResizeObserver(callback, target) {
  const savedCallback = React.useRef(callback);
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  });
  useIsomorphicLayoutEffect(() => {
    const targetEl = target && 'current' in target ? target.current : document.documentElement;
    if (!targetEl) {
      return;
    }
    const observer = new ResizeObserver(entries => {
      savedCallback.current(entries);
    });
    observer.observe(targetEl);
    return () => {
      observer.disconnect();
    };
  }, [target]);
}

exports.useResizeObserver = useResizeObserver;
