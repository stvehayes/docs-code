import React from 'react';
import type { SegmentedControlButtonProps } from './SegmentedControlButton';
import type { SegmentedControlIconButtonProps } from './SegmentedControlIconButton';
import type { SxProp } from '../sx';
import type { ResponsiveValue } from '../hooks/useResponsiveValue';
import type { WidthOnlyViewportRangeKeys } from '../utils/types/ViewportRangeKeys';
type SegmentedControlProps = {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    /** Whether the control fills the width of its parent */
    fullWidth?: boolean | ResponsiveValue<boolean>;
    /** The handler that gets called when a segment is selected */
    onChange?: (selectedIndex: number) => void;
    /** The size of the buttons */
    size?: 'small' | 'medium';
    /** Configure alternative ways to render the control when it gets rendered in tight spaces */
    variant?: 'default' | Partial<Record<WidthOnlyViewportRangeKeys, 'hideLabels' | 'dropdown' | 'default'>>;
} & SxProp;
export declare const SegmentedControl: React.FC<React.PropsWithChildren<SegmentedControlProps>> & {
    Button: React.FC<React.PropsWithChildren<SegmentedControlButtonProps>>;
    IconButton: React.FC<React.PropsWithChildren<SegmentedControlIconButtonProps>>;
};
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map