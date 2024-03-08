import React from 'react';
import type { Suggestions, SuggestionsPlacement, TextInputElement } from './types';
import type { CharacterCoordinates } from '../utils/character-coordinates';
type AutoCompleteSuggestionsProps = {
    suggestions: Suggestions | null;
    portalName?: string;
    triggerCharCoords: CharacterCoordinates;
    onClose: () => void;
    onCommit: (suggestion: string) => void;
    inputRef: React.RefObject<TextInputElement>;
    visible: boolean;
    tabInsertsSuggestions: boolean;
    defaultPlacement: SuggestionsPlacement;
};
/**
 * Renders an overlayed list at the given relative coordinates. Handles keyboard navigation
 * and accessibility concerns.
 */
declare const AutocompleteSuggestions: {
    ({ suggestions, portalName, triggerCharCoords, onClose, onCommit: externalOnCommit, inputRef, visible, tabInsertsSuggestions, defaultPlacement, }: AutoCompleteSuggestionsProps): React.JSX.Element;
    displayName: string;
};
export default AutocompleteSuggestions;
//# sourceMappingURL=_AutocompleteSuggestions.d.ts.map