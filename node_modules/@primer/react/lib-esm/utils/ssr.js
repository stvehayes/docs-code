import { useId } from '../hooks/useId.js';

function SSRProvider({
  children
}) {
  return children;
}
const useSSRSafeId = useId;

export { SSRProvider, useSSRSafeId };
