import type { UseSuggestionsHook } from '.';
type BaseEmoji = {
    /** Name (shortcode) of the emoji. Do not include the wrapping `:` symbols. */
    name: string;
};
type UnicodeEmoji = BaseEmoji & {
    /** Unicode representation of the emoji. */
    character: string;
};
type CustomEmoji = BaseEmoji & {
    /** URL to an image of the emoji. */
    url: string;
};
export type Emoji = UnicodeEmoji | CustomEmoji;
export declare const useEmojiSuggestions: UseSuggestionsHook<Emoji>;
export {};
//# sourceMappingURL=_useEmojiSuggestions.d.ts.map