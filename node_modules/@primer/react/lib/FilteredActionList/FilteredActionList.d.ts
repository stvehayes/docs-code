import React from 'react';
import type { TextInputProps } from '../TextInput';
import type { GroupedListProps, ListPropsBase } from '../deprecated/ActionList/List';
import type { SxProp } from '../sx';
export interface FilteredActionListProps extends Partial<Omit<GroupedListProps, keyof ListPropsBase>>, ListPropsBase, SxProp {
    loading?: boolean;
    placeholderText?: string;
    filterValue?: string;
    onFilterChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    textInputProps?: Partial<Omit<TextInputProps, 'onChange'>>;
    inputRef?: React.RefObject<HTMLInputElement>;
}
export declare function FilteredActionList({ loading, placeholderText, filterValue: externalFilterValue, onFilterChange, items, textInputProps, inputRef: providedInputRef, sx, ...listProps }: FilteredActionListProps): JSX.Element;
export declare namespace FilteredActionList {
    var displayName: string;
}
//# sourceMappingURL=FilteredActionList.d.ts.map