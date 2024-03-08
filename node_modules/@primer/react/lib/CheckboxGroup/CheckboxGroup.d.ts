import type { ChangeEvent, FC } from 'react';
import React from 'react';
import type { CheckboxOrRadioGroupProps } from '../internal/components/CheckboxOrRadioGroup';
import type { SxProp } from '../sx';
import { CheckboxGroupContext } from './CheckboxGroupContext';
type CheckboxGroupProps = {
    /**
     * An onChange handler that gets called when any of the checkboxes change
     */
    onChange?: (selected: string[], e?: ChangeEvent<HTMLInputElement>) => void;
} & CheckboxOrRadioGroupProps & SxProp;
export { CheckboxGroupContext };
declare const _default: FC<React.PropsWithChildren<CheckboxGroupProps>> & {
    Caption: FC<React.PropsWithChildren<SxProp>>;
    Label: FC<React.PropsWithChildren<import("../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroupLabel").CheckboxOrRadioGroupLabelProps>>;
    Validation: FC<React.PropsWithChildren<import("../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroupValidation").CheckboxOrRadioGroupValidationProps>>;
};
export default _default;
//# sourceMappingURL=CheckboxGroup.d.ts.map