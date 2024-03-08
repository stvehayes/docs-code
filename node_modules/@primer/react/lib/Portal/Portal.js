'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var useIsomorphicLayoutEffect = require('../utils/useIsomorphicLayoutEffect.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const PRIMER_PORTAL_ROOT_ID = '__primerPortalRoot__';
const DEFAULT_PORTAL_CONTAINER_NAME = '__default__';
const portalRootRegistry = {};

/**
 * Register a container to serve as a portal root.
 * @param root The element that will be the root for portals created in this container
 * @param name The name of the container, to be used with the `containerName` prop on the Portal Component.
 * If name is not specified, registers the default portal root.
 */
function registerPortalRoot(root, name = DEFAULT_PORTAL_CONTAINER_NAME) {
  portalRootRegistry[name] = root;
}

// Ensures that a default portal root exists and is registered. If a DOM element exists
// with id __primerPortalRoot__, allow that element to serve as the default portal root.
// Otherwise, create that element and attach it to the end of document.body.
function ensureDefaultPortal() {
  const existingDefaultPortalContainer = portalRootRegistry[DEFAULT_PORTAL_CONTAINER_NAME];
  if (!existingDefaultPortalContainer || !document.body.contains(existingDefaultPortalContainer)) {
    let defaultPortalContainer = document.getElementById(PRIMER_PORTAL_ROOT_ID);
    if (!(defaultPortalContainer instanceof Element)) {
      defaultPortalContainer = document.createElement('div');
      defaultPortalContainer.setAttribute('id', PRIMER_PORTAL_ROOT_ID);
      defaultPortalContainer.style.position = 'absolute';
      defaultPortalContainer.style.top = '0';
      defaultPortalContainer.style.left = '0';
      const suitablePortalRoot = document.querySelector('[data-portal-root]');
      if (suitablePortalRoot) {
        suitablePortalRoot.appendChild(defaultPortalContainer);
      } else {
        document.body.appendChild(defaultPortalContainer);
      }
    }
    registerPortalRoot(defaultPortalContainer);
  }
}
/**
 * Creates a React Portal, placing all children in a separate physical DOM root node.
 * @see https://reactjs.org/docs/portals.html
 */
const Portal = ({
  children,
  onMount,
  containerName: _containerName
}) => {
  const elementRef = React__default.default.useRef(null);
  if (!elementRef.current) {
    const div = document.createElement('div');
    // Portaled content should get their own stacking context so they don't interfere
    // with each other in unexpected ways. One should never find themselves tempted
    // to change the zIndex to a value other than "1".
    div.style.position = 'relative';
    div.style.zIndex = '1';
    elementRef.current = div;
  }
  const element = elementRef.current;
  useIsomorphicLayoutEffect(() => {
    let containerName = _containerName;
    if (containerName === undefined) {
      containerName = DEFAULT_PORTAL_CONTAINER_NAME;
      ensureDefaultPortal();
    }
    const parentElement = portalRootRegistry[containerName];
    if (!parentElement) {
      throw new Error(`Portal container '${_containerName}' is not yet registered. Container must be registered with registerPortal before use.`);
    }
    parentElement.appendChild(element);
    onMount === null || onMount === void 0 ? void 0 : onMount();
    return () => {
      parentElement.removeChild(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element]);
  return /*#__PURE__*/ReactDOM.createPortal(children, element);
};

exports.Portal = Portal;
exports.registerPortalRoot = registerPortalRoot;
