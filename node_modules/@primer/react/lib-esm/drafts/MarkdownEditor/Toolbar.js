import { FocusKeys } from '@primer/behaviors';
import { HeadingIcon, BoldIcon, ItalicIcon, QuoteIcon, CodeIcon, LinkIcon, ListUnorderedIcon, ListOrderedIcon, TasklistIcon, MentionIcon, CrossReferenceIcon } from '@primer/octicons-react';
import React, { memo, useContext, useRef } from 'react';
import { isMacOS } from '@primer/behaviors/utils';
import Box from '../../Box/Box.js';
import { useFocusZone } from '../../hooks/useFocusZone.js';
import { MarkdownEditorContext } from './_MarkdownEditorContext.js';
import { SavedRepliesButton } from './_SavedReplies.js';
import { ToolbarButton } from './_ToolbarButton.js';

const Divider = () => {
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: 'inline-grid',
      margin: '0 var(--controlStack-medium-gap-condensed, 8px)',
      height: 'calc(var(--control-medium-size, 32px)/2)',
      borderLeft: 'var(--borderWidth-thin, 1px) solid var(--borderColor-muted)'
    }
  });
};
Divider.displayName = "Divider";
const DefaultToolbarButtons = /*#__PURE__*/memo(() => {
  const {
    condensed,
    formattingToolsRef
  } = useContext(MarkdownEditorContext);
  const cmdOrCtrl = isMacOS() ? 'Cmd' : 'Ctrl';

  // Important: do not replace `() => ref.current?.format()` with `ref.current?.format` - it will refer to an outdated ref.current!
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c;
      return (_formattingToolsRef$c = formattingToolsRef.current) === null || _formattingToolsRef$c === void 0 ? void 0 : _formattingToolsRef$c.header();
    },
    icon: HeadingIcon,
    "aria-label": "Add header text"
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c2;
      return (_formattingToolsRef$c2 = formattingToolsRef.current) === null || _formattingToolsRef$c2 === void 0 ? void 0 : _formattingToolsRef$c2.bold();
    },
    icon: BoldIcon,
    "aria-label": `Bold (${cmdOrCtrl} + B)`
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c3;
      return (_formattingToolsRef$c3 = formattingToolsRef.current) === null || _formattingToolsRef$c3 === void 0 ? void 0 : _formattingToolsRef$c3.italic();
    },
    icon: ItalicIcon,
    "aria-label": `Italic (${cmdOrCtrl} + I)`
  })), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c4;
      return (_formattingToolsRef$c4 = formattingToolsRef.current) === null || _formattingToolsRef$c4 === void 0 ? void 0 : _formattingToolsRef$c4.quote();
    },
    icon: QuoteIcon,
    "aria-label": `Insert a quote (${cmdOrCtrl} + Shift + .)`
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c5;
      return (_formattingToolsRef$c5 = formattingToolsRef.current) === null || _formattingToolsRef$c5 === void 0 ? void 0 : _formattingToolsRef$c5.code();
    },
    icon: CodeIcon,
    "aria-label": `Insert code (${cmdOrCtrl} + E)`
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c6;
      return (_formattingToolsRef$c6 = formattingToolsRef.current) === null || _formattingToolsRef$c6 === void 0 ? void 0 : _formattingToolsRef$c6.link();
    },
    icon: LinkIcon,
    "aria-label": `Add a link (${cmdOrCtrl} + K)`
  })), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c7;
      return (_formattingToolsRef$c7 = formattingToolsRef.current) === null || _formattingToolsRef$c7 === void 0 ? void 0 : _formattingToolsRef$c7.unorderedList();
    },
    icon: ListUnorderedIcon,
    "aria-label": `Add a bulleted list (${cmdOrCtrl} + 8)`
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c8;
      return (_formattingToolsRef$c8 = formattingToolsRef.current) === null || _formattingToolsRef$c8 === void 0 ? void 0 : _formattingToolsRef$c8.orderedList();
    },
    icon: ListOrderedIcon,
    "aria-label": `Add a numbered list (${cmdOrCtrl} + Shift + 7)`
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c9;
      return (_formattingToolsRef$c9 = formattingToolsRef.current) === null || _formattingToolsRef$c9 === void 0 ? void 0 : _formattingToolsRef$c9.taskList();
    },
    icon: TasklistIcon,
    "aria-label": `Add a task list (${cmdOrCtrl} + Shift + L)`
  })), !condensed && /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c10;
      return (_formattingToolsRef$c10 = formattingToolsRef.current) === null || _formattingToolsRef$c10 === void 0 ? void 0 : _formattingToolsRef$c10.mention();
    },
    icon: MentionIcon,
    "aria-label": "Mention a user or team (@)"
  }), /*#__PURE__*/React.createElement(ToolbarButton, {
    onClick: () => {
      var _formattingToolsRef$c11;
      return (_formattingToolsRef$c11 = formattingToolsRef.current) === null || _formattingToolsRef$c11 === void 0 ? void 0 : _formattingToolsRef$c11.reference();
    },
    icon: CrossReferenceIcon,
    "aria-label": "Reference an issue, pull request, or discussion (#)"
  })), /*#__PURE__*/React.createElement(SavedRepliesButton, null));
});
DefaultToolbarButtons.displayName = 'MarkdownEditor.DefaultToolbarButtons';
const CoreToolbar = ({
  children
}) => {
  const containerRef = useRef(null);
  useFocusZone({
    containerRef,
    focusInStrategy: 'closest',
    bindKeys: FocusKeys.ArrowHorizontal | FocusKeys.HomeAndEnd,
    focusOutBehavior: 'wrap'
  });
  return /*#__PURE__*/React.createElement(Box, {
    ref: containerRef,
    "aria-label": "Formatting tools",
    role: "toolbar",
    sx: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      gap: 0,
      alignItems: 'center',
      flexGrow: 1,
      borderBottom: '1px solid',
      borderBottomColor: 'border.muted',
      pl: 2,
      pr: 1
    }
  }, children);
};
CoreToolbar.displayName = "CoreToolbar";
const Toolbar = ({
  children
}) => /*#__PURE__*/React.createElement(CoreToolbar, null, children);
Toolbar.displayName = "Toolbar";
Toolbar.displayName = 'MarkdownEditor.Toolbar';

export { CoreToolbar, DefaultToolbarButtons, Toolbar, ToolbarButton };
