import React from 'react';
import type { StyledWrapperProps } from '../internal/components/TextInputWrapper';
export type SelectProps = Omit<Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> & Omit<StyledWrapperProps, 'variant'>, 'multiple' | 'hasLeadingVisual' | 'hasTrailingVisual' | 'as'> & {
    placeholder?: string;
};
declare const _default: React.ForwardRefExoticComponent<Omit<Omit<Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref">, "size"> & Omit<StyledWrapperProps, "variant">, "as" | "multiple" | "hasLeadingVisual" | "hasTrailingVisual"> & {
    placeholder?: string | undefined;
} & React.RefAttributes<HTMLSelectElement>> & {
    Option: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLOptionElement> & {
        value: string;
    }>>;
    OptGroup: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLOptGroupElement>>>;
};
export default _default;
//# sourceMappingURL=Select.d.ts.map