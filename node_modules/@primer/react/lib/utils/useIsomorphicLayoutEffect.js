'use strict';

var React = require('react');

// eslint-disable-next-line no-restricted-imports
const useIsomorphicLayoutEffect = typeof window !== 'undefined' &&
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
typeof window.document !== 'undefined' &&
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

module.exports = useIsomorphicLayoutEffect;
