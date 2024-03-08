/// <reference types="react" />
import type { SyntheticChangeEmitter } from '../hooks/useSyntheticChange';
type UseIndentingSettings = {
    emitChange: SyntheticChangeEmitter;
};
type UseIndentingResult = {
    onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;
};
/**
 * Provides functionality for indenting and dedenting selected lines in the Markdown editor.
 */
export declare const useIndenting: ({ emitChange }: UseIndentingSettings) => UseIndentingResult;
export {};
//# sourceMappingURL=_useIndenting.d.ts.map