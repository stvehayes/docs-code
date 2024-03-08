import type { UseSuggestionsHook } from '.';
/** Could be a user, team, or organization - anything that can be mentioned. */
export type Mentionable = {
    description: string;
    /** The ID of the team or the login of the user. Do not include the `@` symbol. */
    identifier: string;
};
export declare const useMentionSuggestions: UseSuggestionsHook<Mentionable>;
//# sourceMappingURL=_useMentionSuggestions.d.ts.map