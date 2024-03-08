import { useState, useEffect } from 'react';

function useOverflow(ref) {
  const [hasOverflow, setHasOverflow] = useState(false);
  useEffect(() => {
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

export { useOverflow };
