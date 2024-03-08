'use strict';

var React = require('react');
var useIsomorphicLayoutEffect = require('../../utils/useIsomorphicLayoutEffect.js');
var _useListEditing = require('../MarkdownEditor/_useListEditing.js');

// Make check for code fences more robust per spec: https://github.github.com/gfm/#fenced-code-blocks
const parseCodeFenceBegin = line => {
  const match = line.match(/^ {0,3}(`{3,}|~{3,})[^`]*$/);
  return match ? match[1] : null;
};
const isCodeFenceEnd = (line, fence) => {
  const regex = new RegExp(`^ {0,3}${fence}${fence[0]}* *$`);
  return regex.test(line);
};
const isTaskListItem = item => typeof (item === null || item === void 0 ? void 0 : item.taskBox) === 'string';
const toggleTaskListItem = item => ({
  ...item,
  taskBox: item.taskBox === '[ ]' ? '[x]' : '[ ]'
});
/**
 * Adds support for list interaction to rendered Markdown.
 *
 * Currently only supports checking / unchecking list items - reordering and task-item to
 * issue conversion are not supported yet.
 */
const useListInteraction = ({
  htmlContainer,
  markdownValue,
  onChange,
  disabled = false,
  dependencies = []
}) => {
  // Storing the value in a ref allows not using the markdown value as a depdency of
  // onToggleItem, which would mean we'd have to re-bind the event handlers on every change
  const markdownRef = React.useRef(markdownValue);
  useIsomorphicLayoutEffect(() => {
    markdownRef.current = markdownValue;
  }, [markdownValue]);
  const onToggleItem = React.useCallback(toggledItemIndex => () => {
    const lines = markdownRef.current.split(/\r?\n/);
    let currentCodeFence = null;
    for (let lineIndex = 0, taskIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      if (!currentCodeFence) {
        currentCodeFence = parseCodeFenceBegin(line);
      } else if (isCodeFenceEnd(line, currentCodeFence)) {
        currentCodeFence = null;
        continue;
      }
      if (currentCodeFence) continue;
      const parsedLine = _useListEditing.parseListItem(line);
      if (!isTaskListItem(parsedLine)) continue;
      if (taskIndex === toggledItemIndex) {
        const updatedLine = _useListEditing.listItemToString(toggleTaskListItem(parsedLine));
        lines.splice(lineIndex, 1, updatedLine);
        const updatedMarkdown = lines.join('\n');
        markdownRef.current = updatedMarkdown;
        onChange(updatedMarkdown);
        return;
      }
      taskIndex++;
    }
  }, [onChange]);
  const [checkboxElements, setCheckboxElements] = React.useState([]);
  React.useEffect(() => {
    var _htmlContainer$queryS;
    setCheckboxElements(Array.from((_htmlContainer$queryS = htmlContainer === null || htmlContainer === void 0 ? void 0 : htmlContainer.querySelectorAll('input[type=checkbox].task-list-item-checkbox')) !== null && _htmlContainer$queryS !== void 0 ? _htmlContainer$queryS : []));
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [htmlContainer, ...dependencies]);

  // This could be combined with the other effect, but then the checkboxes might have a flicker
  // of being disabled between cleanup & setup
  React.useEffect(function enableOrDisableCheckboxes() {
    const cleanupFns = checkboxElements.map(el => {
      const previouslyDisabled = el.disabled;
      el.disabled = disabled;
      return () => {
        el.disabled = previouslyDisabled;
      };
    });

    // eslint-disable-next-line github/array-foreach
    return () => cleanupFns.forEach(fn => fn());
  }, [checkboxElements, disabled]);
  React.useEffect(function bindEventListeners() {
    const cleanupFns = checkboxElements.map((el, i) => {
      const toggleHandler = onToggleItem(i);
      el.addEventListener('change', toggleHandler);
      return () => el.removeEventListener('change', toggleHandler);
    });

    // eslint-disable-next-line github/array-foreach
    return () => cleanupFns.forEach(fn => fn());
  }, [checkboxElements, onToggleItem]);
};

exports.isCodeFenceEnd = isCodeFenceEnd;
exports.isTaskListItem = isTaskListItem;
exports.parseCodeFenceBegin = parseCodeFenceBegin;
exports.useListInteraction = useListInteraction;
