import type { ButtonHTMLAttributes } from 'react';
import React from 'react';
import type { IconProps } from '@primer/octicons-react';
import type { SxProp } from '../sx';
export type SegmentedControlButtonProps = {
    /** The visible label rendered in the button */
    children: string;
    /** Whether the segment is selected. This is used for controlled `SegmentedControls`, and needs to be updated using the `onChange` handler on `SegmentedControl`. */
    selected?: boolean;
    /** Whether the segment is selected. This is used for uncontrolled `SegmentedControls` to pick one `SegmentedControlButton` that is selected on the initial render. */
    defaultSelected?: boolean;
    /** The leading icon comes before item label */
    leadingIcon?: React.FunctionComponent<React.PropsWithChildren<IconProps>>;
} & SxProp & ButtonHTMLAttributes<HTMLButtonElement | HTMLLIElement>;
declare const SegmentedControlButton: React.FC<React.PropsWithChildren<SegmentedControlButtonProps>>;
export default SegmentedControlButton;
//# sourceMappingURL=SegmentedControlButton.d.ts.map