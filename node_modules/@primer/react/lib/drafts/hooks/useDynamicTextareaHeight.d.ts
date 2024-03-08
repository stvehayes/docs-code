import type { RefObject } from 'react';
import type { SxProp } from '../../sx';
type UseDynamicTextareaHeightSettings = {
    disabled?: boolean;
    minHeightLines?: number;
    maxHeightLines?: number;
    elementRef: RefObject<HTMLTextAreaElement | null>;
    /** The current value of the input. */
    value: string;
};
/**
 * Calculates the optimal height of the textarea according to its content, automatically
 * resizing it as the user types. If the user manually resizes the textarea, their setting
 * will be respected.
 *
 * Returns an object to spread to the component's `sx` prop. If you are using `Textarea`,
 * apply this to the child `textarea` element: `<Textarea sx={{'& textarea': resultOfThisHook}} />`.
 *
 * NOTE: for the most accurate results, be sure that the `lineHeight` of the element is
 * explicitly set in CSS.
 *
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
export declare const useDynamicTextareaHeight: ({ disabled, minHeightLines, maxHeightLines, elementRef, value, }: UseDynamicTextareaHeightSettings) => SxProp['sx'];
export {};
//# sourceMappingURL=useDynamicTextareaHeight.d.ts.map