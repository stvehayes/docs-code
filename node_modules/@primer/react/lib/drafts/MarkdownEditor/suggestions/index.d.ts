import type { Suggestion, Trigger } from '../../InlineAutocomplete';
export type SuggestionOptions<T> = T[] | (() => Promise<T[]>) | 'loading';
export type UseSuggestionsHook<T> = (options: SuggestionOptions<T>) => {
    trigger: Trigger;
    calculateSuggestions: (query: string) => Promise<Suggestion[] | 'loading'>;
};
export declare const suggestionsCalculator: <T>(options: SuggestionOptions<T>, score: (query: string, option: T) => number, toSuggestion: (option: T) => Suggestion) => (query: string) => Promise<"loading" | Suggestion[]>;
//# sourceMappingURL=index.d.ts.map