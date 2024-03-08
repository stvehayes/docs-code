import type { ChangeEvent, ChangeEventHandler, FC } from 'react';
import React from 'react';
import type { CheckboxOrRadioGroupProps } from '../internal/components/CheckboxOrRadioGroup';
import type { SxProp } from '../sx';
type RadioGroupProps = {
    /**
     * An onChange handler that gets called when the selection changes
     */
    onChange?: (selected: string | null, e?: ChangeEvent<HTMLInputElement>) => void;
    /**
     * The name used to identify this group of radios
     */
    name: string;
} & CheckboxOrRadioGroupProps & SxProp;
export declare const RadioGroupContext: React.Context<{
    disabled?: boolean | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    name: string;
} | null>;
declare const _default: FC<React.PropsWithChildren<RadioGroupProps>> & {
    Caption: FC<React.PropsWithChildren<SxProp>>;
    Label: FC<React.PropsWithChildren<import("../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroupLabel").CheckboxOrRadioGroupLabelProps>>;
    Validation: FC<React.PropsWithChildren<import("../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroupValidation").CheckboxOrRadioGroupValidationProps>>;
};
export default _default;
//# sourceMappingURL=RadioGroup.d.ts.map