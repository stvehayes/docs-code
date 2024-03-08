import { createContext } from 'react';

const UnderlineNavContext = /*#__PURE__*/createContext({
  theme: {},
  setChildrenWidth: () => null,
  setNoIconChildrenWidth: () => null,
  loadingCounters: false,
  iconsVisible: true
});

export { UnderlineNavContext };
