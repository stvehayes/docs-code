'use strict';

const MAX_SUGGESTIONS = 5;
const suggestionsCalculator = (options, score, toSuggestion) => async query => {
  if (options === 'loading') return 'loading';
  const optionsArray = Array.isArray(options) ? options : await options();

  // If the query is empty, scores will be -INFINITY
  const scoredAndSorted = query ? optionsArray.map(o => [score(query, o), o]).filter(([s]) => s > 0).sort(([a], [b]) => b - a).slice(0, MAX_SUGGESTIONS).map(([, o]) => o) : optionsArray.slice(0, MAX_SUGGESTIONS);
  return scoredAndSorted.map(toSuggestion);
};

exports.suggestionsCalculator = suggestionsCalculator;
