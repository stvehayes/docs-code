import React from 'react';
import type { BetterSystemStyleObject } from '../../sx';
import type { SelectSuggestionsEvent, ShowSuggestionsEvent, Suggestions, SuggestionsPlacement, TextInputCompatibleChild, Trigger } from './types';
export type InlineAutocompleteProps = {
    /** Register the triggers that can cause suggestions to appear. */
    triggers: Array<Trigger>;
    /**
     * Called when a valid suggestion query is updated. This should be handled by setting the
     * `suggestions` prop accordingly.
     */
    onShowSuggestions: (event: ShowSuggestionsEvent) => void;
    /**
     * Called when a suggestion is selected.
     *
     * @note This should be used only for performing side effects, not for modifying
     * the inserted text. Do not call `setState` in this handler or the user's cursor
     * position / undo history could be lost.
     */
    onSelectSuggestion?: (event: SelectSuggestionsEvent) => void;
    /** Called when suggestions should be hidden. Set `suggestions` to `null` in this case. */
    onHideSuggestions: () => void;
    /**
     * The currently visible list of suggestions. If `loading`, a loading indicator will be
     * shown. If `null` or empty, the list will be hidden. Suggestion sort will be preserved.
     *
     * Typically, this should not contain more than five or so suggestions.
     */
    suggestions: Suggestions | null;
    /**
     * If `true`, suggestions will be applied with both `Tab` and `Enter`, instead of just
     * `Enter`. This may be expected behavior for users used to IDEs, but use caution when
     * hijacking browser tabbing capability.
     * @default false
     */
    tabInsertsSuggestions?: boolean;
    /**
     * The `AutocompleteTextarea` has a container for positioning the suggestions overlay.
     * This can break some layouts (ie, if the editor must expand with `flex: 1` to fill space)
     * so you can override container styles here. Usually this should not be necessary.
     * `position` may not be overriden.
     */
    sx?: Omit<BetterSystemStyleObject, 'position'>;
    /**
     * An `input` or `textarea` compatible component to extend. A compatible component is any
     * component that forwards a ref and props to an underlying `input` or `textarea` element,
     * including but not limited to `Input`, `TextArea`, `input`, `textarea`, `styled.input`,
     * and `styled.textarea`. If the child is not compatible, a runtime `TypeError` will be
     * thrown.
     */
    children: TextInputCompatibleChild;
    /**
     * Control which side of the insertion point the suggestions list appears on by default. This
     * should almost always be `"below"` because it typically provides a better user experience
     * (the most-relevant suggestions will appear closest to the text). However, if the input
     * is always near the bottom of the screen (ie, a chat composition form), it may be better to
     * display the suggestions above the input.
     *
     * In either case, if there is not enough room to display the suggestions in the default direction,
     * the suggestions will appear in the other direction.
     * @default "below"
     */
    suggestionsPlacement?: SuggestionsPlacement;
};
/**
 * Shows suggestions to complete the current word/phrase the user is actively typing.
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
declare const InlineAutocomplete: ({ triggers, suggestions, onShowSuggestions, onHideSuggestions, onSelectSuggestion, sx, children, tabInsertsSuggestions, suggestionsPlacement, ...externalInputProps }: InlineAutocompleteProps & React.ComponentProps<'textarea' | 'input'>) => React.JSX.Element;
export default InlineAutocomplete;
//# sourceMappingURL=InlineAutocomplete.d.ts.map