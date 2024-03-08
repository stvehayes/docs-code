'use strict';

var useId = require('../hooks/useId.js');

function SSRProvider({
  children
}) {
  return children;
}
const useSSRSafeId = useId.useId;

exports.SSRProvider = SSRProvider;
exports.useSSRSafeId = useSSRSafeId;
