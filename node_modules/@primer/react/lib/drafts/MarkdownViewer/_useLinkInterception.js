'use strict';

var React = require('react');

/**
 * Updates all links in the container to open a new tab and call `onLinkClick` on click.
 */
const useLinkInterception = ({
  htmlContainer,
  onLinkClick,
  openLinksInNewTab
}) => {
  React.useEffect(() => {
    const clickHandler = event => {
      const link = event.target.closest('a');
      if (!link) return;
      onLinkClick === null || onLinkClick === void 0 ? void 0 : onLinkClick(event);
      if (!event.defaultPrevented && openLinksInNewTab && link.href) {
        window.open(link.href, '_blank', 'noopener noreferrer');
        event.preventDefault();
      }
    };
    if (!htmlContainer) return;
    htmlContainer.addEventListener('click', clickHandler);
    return () => {
      htmlContainer.removeEventListener('click', clickHandler);
    };
  }, [htmlContainer, onLinkClick, openLinksInNewTab]);
};

exports.useLinkInterception = useLinkInterception;
