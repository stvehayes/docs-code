'use strict';

var fzy_js = require('fzy.js');
var React = require('react');
var index = require('./index.js');
var index$1 = require('../../../ActionList/index.js');
var Text = require('../../../Text/Text.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

/** Could be a user, team, or organization - anything that can be mentioned. */

const trigger = {
  triggerChar: '@'
};
const mentionableToSuggestion = mentionable => ({
  value: mentionable.identifier,
  render: props => /*#__PURE__*/React__default.default.createElement(index$1.ActionList.Item, props, /*#__PURE__*/React__default.default.createElement(Text, {
    sx: {
      fontWeight: 'bold'
    }
  }, mentionable.identifier), ' ', /*#__PURE__*/React__default.default.createElement(index$1.ActionList.Description, null, mentionable.description))
});
const scoreSuggestion = (query, mentionable) => {
  const fzyScore = fzy_js.score(query, `${mentionable.identifier} ${mentionable.description}`.trim().toLowerCase());

  // fzy unintuitively returns Infinity if the length of the item is less than or equal to the length of the query
  // All users have an identifier but some have empty descriptions; in those cases the query might equal the identifier
  // and we'd still want to show the suggestion in that case.
  if (fzyScore === Infinity && query.toLowerCase() !== mentionable.identifier.toLowerCase()) return -Infinity;
  return fzyScore;
};
const useMentionSuggestions = mentionables => {
  const calculateSuggestions = React.useMemo(() => index.suggestionsCalculator(mentionables, scoreSuggestion, mentionableToSuggestion), [mentionables]);
  return {
    calculateSuggestions,
    trigger
  };
};

exports.useMentionSuggestions = useMentionSuggestions;
