import React from 'react';
import type { TextareaProps } from '../../Textarea';
import type { Emoji } from './suggestions/_useEmojiSuggestions';
import type { Mentionable } from './suggestions/_useMentionSuggestions';
import type { Reference } from './suggestions/_useReferenceSuggestions';
import type { SuggestionOptions } from './suggestions';
interface MarkdownInputProps extends Omit<TextareaProps, 'onChange'> {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    disabled?: boolean;
    placeholder?: string;
    id: string;
    maxLength?: number;
    fullHeight?: boolean;
    isDraggedOver: boolean;
    emojiSuggestions?: SuggestionOptions<Emoji>;
    mentionSuggestions?: SuggestionOptions<Mentionable>;
    referenceSuggestions?: SuggestionOptions<Reference>;
    minHeightLines: number;
    maxHeightLines: number;
    monospace: boolean;
    pasteUrlsAsPlainText: boolean;
    /** Use this prop to control visibility instead of unmounting, so the undo stack and custom height are preserved. */
    visible: boolean;
}
export declare const MarkdownInput: React.ForwardRefExoticComponent<MarkdownInputProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=_MarkdownInput.d.ts.map