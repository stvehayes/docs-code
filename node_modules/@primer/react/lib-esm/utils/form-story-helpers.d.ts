import type React from 'react';
import type { CheckboxGroup, FormControl } from '../index';
import type { ComponentProps } from './types';
import type { ArgTypes } from '@storybook/react';
import type { InputType } from '@storybook/csf';
type CheckboxOrRadioGroupWrapperArgs = ComponentProps<typeof CheckboxGroup>;
type CheckboxOrRadioGroupLabelArgs = ComponentProps<typeof CheckboxGroup.Label> & {
    labelChildren?: React.ReactNode;
};
type CheckboxOrRadioGroupCaptionArgs = ComponentProps<typeof CheckboxGroup.Caption> & {
    captionChildren?: React.ReactNode;
};
type CheckboxOrRadioGroupValidationMessageArgs = ComponentProps<typeof CheckboxGroup.Validation> & {
    validationChildren?: React.ReactNode;
};
export type CheckboxOrRadioGroupArgs = CheckboxOrRadioGroupWrapperArgs & CheckboxOrRadioGroupLabelArgs & CheckboxOrRadioGroupCaptionArgs & CheckboxOrRadioGroupValidationMessageArgs;
type FormControlParentArgs = Pick<ComponentProps<typeof FormControl>, 'required' | 'disabled'>;
type FormControlLabelArgs = Omit<ComponentProps<typeof FormControl.Label>, 'as'> & {
    labelChildren?: React.ReactNode;
};
type FormControlCaptionArgs = ComponentProps<typeof FormControl.Caption> & {
    captionChildren?: React.ReactNode;
};
type FormControlValidationMessageArgs = ComponentProps<typeof FormControl.Validation> & {
    validationChildren?: React.ReactNode;
};
export type FormControlArgs<TInputProps = unknown> = FormControlParentArgs & FormControlLabelArgs & FormControlCaptionArgs & Partial<FormControlValidationMessageArgs> & // partial because we don't pass use validation for checkbox or radio
TInputProps;
export declare const inputWrapperArgTypes: ArgTypes;
export declare const getTextInputArgTypes: (category?: string) => Record<string, unknown>;
export declare const textInputExcludedControlKeys: string[];
export declare const textInputWithTokensArgTypes: ArgTypes;
export declare const formControlArgs: {
    required: boolean;
    disabled: boolean;
    labelChildren: string;
    visuallyHidden: boolean;
    captionChildren: string;
    validationChildren: string;
    variant: string;
};
export declare const formControlArgTypes: ArgTypes;
export declare const formControlArgTypesWithoutValidation: Partial<Record<string | number, InputType>>;
export declare const getFormControlArgsByChildComponent: ({ captionChildren, disabled, labelChildren, required, validationChildren, variant, visuallyHidden, }: FormControlArgs) => {
    parentArgs: {
        disabled: boolean | undefined;
        required: boolean | undefined;
    };
    labelArgs: {
        visuallyHidden: boolean | undefined;
        children: React.ReactNode;
    };
    captionArgs: {
        children: React.ReactNode;
    };
    validationArgs: {
        children: React.ReactNode;
        variant: import("./types/FormValidationStatus").FormValidationStatus | undefined;
    };
};
export {};
//# sourceMappingURL=form-story-helpers.d.ts.map