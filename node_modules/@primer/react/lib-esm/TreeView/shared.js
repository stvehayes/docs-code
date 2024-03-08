/**
 * Returns the accessible name of an element
 */
function getAccessibleName(element) {
  var _document$getElementB, _document$getElementB2, _element$textContent;
  const label = element.getAttribute('aria-label');
  const labelledby = element.getAttribute('aria-labelledby');
  if (label) return label;
  if (labelledby) return (_document$getElementB = (_document$getElementB2 = document.getElementById(labelledby)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.textContent) !== null && _document$getElementB !== void 0 ? _document$getElementB : '';
  return (_element$textContent = element.textContent) !== null && _element$textContent !== void 0 ? _element$textContent : '';
}

export { getAccessibleName };
