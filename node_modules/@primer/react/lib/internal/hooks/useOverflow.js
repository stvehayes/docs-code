'use strict';

var React = require('react');

function useOverflow(ref) {
  const [hasOverflow, setHasOverflow] = React.useState(false);
  React.useEffect(() => {
    if (ref.current === null) {
      return;
    }
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setHasOverflow(entry.target.scrollHeight > entry.target.clientHeight || entry.target.scrollWidth > entry.target.clientWidth);
      }
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return hasOverflow;
}

exports.useOverflow = useOverflow;
