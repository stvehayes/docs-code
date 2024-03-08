import type { InputHTMLAttributes } from 'react';
import React from 'react';
import type { SxProp } from '../sx';
import type { FormValidationStatus } from '../utils/types/FormValidationStatus';
export type RadioProps = {
    /**
     * A unique value that is never shown to the user.
     * Used during form submission and to identify which radio button in a group is selected
     */
    value: string;
    /**
     * Name attribute of the input element. Required for grouping radio inputs
     */
    name?: string;
    /**
     * Apply inactive visual appearance to the radio button
     */
    disabled?: boolean;
    /**
     * Indicates whether the radio button is selected
     */
    checked?: boolean;
    /**
     * Forward a ref to the underlying input element
     */
    ref?: React.RefObject<HTMLInputElement>;
    /**
     * Indicates whether the radio button must be checked before the form can be submitted
     */
    required?: boolean;
    /**
     * Only used to inform ARIA attributes. Individual radio inputs do not have validation styles.
     */
    validationStatus?: FormValidationStatus;
} & InputHTMLAttributes<HTMLInputElement> & SxProp;
/**
 * An accessible, native radio component for selecting one option from a list.
 */
declare const Radio: React.ForwardRefExoticComponent<Omit<RadioProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map