import React, { useMemo } from 'react';
import { suggestionsCalculator } from './index.js';
import { ActionList } from '../../../ActionList/index.js';
import Text from '../../../Text/Text.js';
import { score } from 'fzy.js';

const trigger = {
  triggerChar: '#',
  multiWord: true
};
const referenceToSuggestion = reference => ({
  value: reference.id,
  render: props => /*#__PURE__*/React.createElement(ActionList.Item, props, reference.iconHtml && /*#__PURE__*/React.createElement(ActionList.LeadingVisual, null, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: reference.iconHtml
    }
  })), /*#__PURE__*/React.createElement(Text, {
    sx: {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',
      overflow: 'hidden',
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: reference.titleHtml
    }
  })), ' ', /*#__PURE__*/React.createElement(ActionList.Description, null, "#", reference.id))
});
const scoreSuggestion = (query, reference) => {
  // fzy unituitively returns Infinity if the length of the item is less than or equal to the length of the query
  const fzyScore = score(query, `${reference.id} ${reference.titleText}`);
  // Here, unlike for mentionables, we don't need to check for equality because the user's query
  // can never equal the search string (we don't do filtering if the query is in "#123 some text" form)
  return fzyScore === Infinity ? -Infinity : fzyScore;
};
const useReferenceSuggestions = references => {
  const calculateSuggestions = useMemo(() => {
    const calculator = suggestionsCalculator(references, scoreSuggestion, referenceToSuggestion);
    return async query => {
      if (/^\d+\s/.test(query)) return []; // don't return anything if the query is in the form #123 ..., assuming they already have the number they want
      return calculator(query);
    };
  }, [references]);
  return {
    calculateSuggestions,
    trigger
  };
};

export { useReferenceSuggestions };
