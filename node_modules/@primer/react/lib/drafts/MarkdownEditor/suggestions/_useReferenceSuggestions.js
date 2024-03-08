'use strict';

var React = require('react');
var index = require('./index.js');
var index$1 = require('../../../ActionList/index.js');
var Text = require('../../../Text/Text.js');
var fzy_js = require('fzy.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const trigger = {
  triggerChar: '#',
  multiWord: true
};
const referenceToSuggestion = reference => ({
  value: reference.id,
  render: props => /*#__PURE__*/React__default.default.createElement(index$1.ActionList.Item, props, reference.iconHtml && /*#__PURE__*/React__default.default.createElement(index$1.ActionList.LeadingVisual, null, /*#__PURE__*/React__default.default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: reference.iconHtml
    }
  })), /*#__PURE__*/React__default.default.createElement(Text, {
    sx: {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',
      overflow: 'hidden',
      maxWidth: 400
    }
  }, /*#__PURE__*/React__default.default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: reference.titleHtml
    }
  })), ' ', /*#__PURE__*/React__default.default.createElement(index$1.ActionList.Description, null, "#", reference.id))
});
const scoreSuggestion = (query, reference) => {
  // fzy unituitively returns Infinity if the length of the item is less than or equal to the length of the query
  const fzyScore = fzy_js.score(query, `${reference.id} ${reference.titleText}`);
  // Here, unlike for mentionables, we don't need to check for equality because the user's query
  // can never equal the search string (we don't do filtering if the query is in "#123 some text" form)
  return fzyScore === Infinity ? -Infinity : fzyScore;
};
const useReferenceSuggestions = references => {
  const calculateSuggestions = React.useMemo(() => {
    const calculator = index.suggestionsCalculator(references, scoreSuggestion, referenceToSuggestion);
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

exports.useReferenceSuggestions = useReferenceSuggestions;
