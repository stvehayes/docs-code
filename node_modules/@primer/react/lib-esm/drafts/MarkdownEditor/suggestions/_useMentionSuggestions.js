import { score } from 'fzy.js';
import React, { useMemo } from 'react';
import { suggestionsCalculator } from './index.js';
import { ActionList } from '../../../ActionList/index.js';
import Text from '../../../Text/Text.js';

/** Could be a user, team, or organization - anything that can be mentioned. */

const trigger = {
  triggerChar: '@'
};
const mentionableToSuggestion = mentionable => ({
  value: mentionable.identifier,
  render: props => /*#__PURE__*/React.createElement(ActionList.Item, props, /*#__PURE__*/React.createElement(Text, {
    sx: {
      fontWeight: 'bold'
    }
  }, mentionable.identifier), ' ', /*#__PURE__*/React.createElement(ActionList.Description, null, mentionable.description))
});
const scoreSuggestion = (query, mentionable) => {
  const fzyScore = score(query, `${mentionable.identifier} ${mentionable.description}`.trim().toLowerCase());

  // fzy unintuitively returns Infinity if the length of the item is less than or equal to the length of the query
  // All users have an identifier but some have empty descriptions; in those cases the query might equal the identifier
  // and we'd still want to show the suggestion in that case.
  if (fzyScore === Infinity && query.toLowerCase() !== mentionable.identifier.toLowerCase()) return -Infinity;
  return fzyScore;
};
const useMentionSuggestions = mentionables => {
  const calculateSuggestions = useMemo(() => suggestionsCalculator(mentionables, scoreSuggestion, mentionableToSuggestion), [mentionables]);
  return {
    calculateSuggestions,
    trigger
  };
};

export { useMentionSuggestions };
