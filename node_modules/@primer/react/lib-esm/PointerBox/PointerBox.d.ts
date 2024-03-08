import React from 'react';
import type { BoxProps } from '../Box';
import type { CaretProps } from '../Caret';
import type { SxProp } from '../sx';
type MutatedSxProps = {
    sx?: {
        bg?: string;
        backgroundColor?: string;
        borderColor?: string;
    };
} & SxProp;
export type PointerBoxProps = {
    caret?: CaretProps['location'];
    bg?: CaretProps['bg'];
    borderColor?: CaretProps['borderColor'];
    border?: CaretProps['borderWidth'];
} & BoxProps & MutatedSxProps;
declare function PointerBox(props: PointerBoxProps): React.JSX.Element;
export default PointerBox;
//# sourceMappingURL=PointerBox.d.ts.map