import type { TextareaHTMLAttributes } from 'react';
import React from 'react';
import type { FormValidationStatus } from '../utils/types/FormValidationStatus';
import type { SxProp } from '../sx';
export declare const DEFAULT_TEXTAREA_ROWS = 7;
export declare const DEFAULT_TEXTAREA_COLS = 30;
export declare const DEFAULT_TEXTAREA_RESIZE = "both";
export type TextareaProps = {
    /**
     * Apply inactive visual appearance to the Textarea
     */
    disabled?: boolean;
    /**
     * Indicates whether the Textarea validation state
     */
    validationStatus?: FormValidationStatus;
    /**
     * Block
     */
    block?: boolean;
    /**
     * Allows resizing of the textarea
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /**
     * apply a high contrast color to background
     */
    contrast?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement> & SxProp;
/**
 * An accessible, native textarea component that supports validation states.
 * This component accepts all native HTML <textarea> attributes as props.
 */
declare const Textarea: React.ForwardRefExoticComponent<{
    /**
     * Apply inactive visual appearance to the Textarea
     */
    disabled?: boolean | undefined;
    /**
     * Indicates whether the Textarea validation state
     */
    validationStatus?: FormValidationStatus | undefined;
    /**
     * Block
     */
    block?: boolean | undefined;
    /**
     * Allows resizing of the textarea
     */
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    /**
     * apply a high contrast color to background
     */
    contrast?: boolean | undefined;
} & TextareaHTMLAttributes<HTMLTextAreaElement> & SxProp & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
//# sourceMappingURL=Textarea.d.ts.map