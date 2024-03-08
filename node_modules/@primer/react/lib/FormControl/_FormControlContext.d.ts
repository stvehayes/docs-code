/// <reference types="react" />
import type { FormValidationStatus } from '../utils/types/FormValidationStatus';
import type { FormControlProps } from './FormControl';
interface FormControlContext extends Pick<FormControlProps, 'disabled' | 'id' | 'required'> {
    captionId?: string;
    validationMessageId?: string;
    validationStatus?: FormValidationStatus;
}
declare const FormControlContext: import("react").Context<FormControlContext | null>;
export declare const FormControlContextProvider: import("react").Provider<FormControlContext | null>;
/** This is the private/internal interface for subcomponents of `FormControl`. */
export declare function useFormControlContext(): FormControlContext;
interface FormControlForwardedProps extends Omit<FormControlContext, 'captionId' | 'validationMessageId'> {
    ['aria-describedby']?: string;
}
/**
 * Make any component compatible with `FormControl`'s automatic wiring up of accessibility attributes & validation by
 * reading the props from this hook and merging them with the passed-in props. If used outside of `FormControl`, this
 * hook has no effect.
 *
 * @param externalProps The external props passed to this component. If provided, these props will be merged with the
 * `FormControl` props, with external props taking priority.
 */
export declare function useFormControlForwardedProps<P>(externalProps: P): P & FormControlForwardedProps;
/**
 * Make any component compatible with `FormControl`'s automatic wiring up of accessibility attributes & validation by
 * reading the props from this hook and handling them / assigning them to the underlying form control. If used outside
 * of `FormControl`, this hook has no effect.
 */
export declare function useFormControlForwardedProps(): FormControlForwardedProps;
export {};
//# sourceMappingURL=_FormControlContext.d.ts.map