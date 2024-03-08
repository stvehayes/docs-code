import type { MouseEventHandler } from 'react';
import React from 'react';
import type { SxProp } from '../sx';
import type { CellAlignment } from '../DataTable/column';
export interface ToggleSwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, SxProp {
    /** Uncontrolled - whether the switch is turned on */
    defaultChecked?: boolean;
    /** Whether the switch is ready for user input */
    disabled?: boolean;
    /** Whether the switch's value is being calculated */
    loading?: boolean;
    /** Whether the switch is turned on */
    checked?: boolean;
    /** The callback that is called when the switch is toggled on or off */
    onChange?: (checked: boolean) => void;
    /** The callback that is called when the switch is clicked */
    onClick?: MouseEventHandler;
    /** Size of the switch */
    size?: 'small' | 'medium';
    /** Whether the "on" and "off" labels should appear before or after the switch.
     * **This should only be changed when the switch's alignment needs to be adjusted.** For example: It needs to be left-aligned because the label appears above it and the caption appears below it.
     */
    statusLabelPosition?: CellAlignment;
}
declare const ToggleSwitch: React.ForwardRefExoticComponent<ToggleSwitchProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export default ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.d.ts.map