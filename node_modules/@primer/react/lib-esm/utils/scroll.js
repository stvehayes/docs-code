/**
 * Returns the nearest scrollable parent of the element or `null` if the element
 * is not contained in a scrollable element.
 */
function getScrollContainer(element) {
  if (!element || element === document.body) {
    return null;
  }
  return isScrollable(element) ? element : getScrollContainer(element.parentElement);
}

/** Returns `true` if the element is scrollable */
function isScrollable(element) {
  const hasScrollableContent = element.scrollHeight > element.clientHeight;
  return hasScrollableContent && !(window.getComputedStyle(element).overflowY.indexOf('hidden') !== -1);
}

export { getScrollContainer };
