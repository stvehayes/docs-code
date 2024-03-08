'use strict';

var MarkdownEditor$1 = require('./MarkdownEditor.js');
var Toolbar = require('./Toolbar.js');
var Actions = require('./Actions.js');
var Footer = require('./Footer.js');
var Label = require('./Label.js');
var _ToolbarButton = require('./_ToolbarButton.js');

/** @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604) */
const MarkdownEditor = Object.assign(MarkdownEditor$1, {
  /** REQUIRED: An accessible label for the editor. */
  Label: Label.Label,
  /**
   * An optional custom toolbar. The toolbar should contain `ToolbarButton`s before
   * and/or after a `DefaultToolbarButtons` instance. To create groups of buttons, wrap
   * them in an unstyled `Box`.
   */
  Toolbar: Toolbar.Toolbar,
  /**
   * A custom toolbar button. This takes `IconButton` props. Every toolbar button should
   * have an `aria-label` defined.
   */
  ToolbarButton: _ToolbarButton.ToolbarButton,
  /**
   * The full set of default toolbar buttons. This is all the basic formatting tools in a
   * standardized order.
   */
  DefaultToolbarButtons: Toolbar.DefaultToolbarButtons,
  /** An optional custom footer to show below the editor. */
  Footer: Footer.Footer,
  /** A button to show in the editor footer before the `DefaultFooterButtons`, i.e.
   * the "Markdown is supported" button and file upload button in a standardized order. */
  FooterButton: Footer.FooterButton,
  /**
   * Optionally define a set of custom buttons to show in the footer. Often if you
   * are defining custom buttons you should also wrap the editor in a `<form>`. This
   * component should only contain `ActionButton`s.
   */
  Actions: Actions.Actions,
  /** A button to show in the editor footer after the `DefaultFooterButtons`, i.e.
   * the "Markdown is supported" button and file upload button in a standardized order. */
  ActionButton: Actions.ActionButton
});

module.exports = MarkdownEditor;
