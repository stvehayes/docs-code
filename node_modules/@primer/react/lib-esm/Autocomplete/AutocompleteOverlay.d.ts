import React from 'react';
import type { OverlayProps } from '../Overlay';
import type { ComponentProps } from '../utils/types';
type AutocompleteOverlayInternalProps = {
    /**
     * The ref of the element that the position of the menu is based on. By default, the menu is positioned based on the text input
     */
    menuAnchorRef?: React.RefObject<HTMLElement>;
    /**
     * Props to be spread on the internal `Overlay` component.
     */
    overlayProps?: Partial<OverlayProps>;
    children?: React.ReactNode;
} & Partial<OverlayProps> & Pick<React.AriaAttributes, 'aria-labelledby'>;
declare function AutocompleteOverlay({ menuAnchorRef, overlayProps: oldOverlayProps, children, ...newOverlayProps }: AutocompleteOverlayInternalProps): React.JSX.Element | null;
declare namespace AutocompleteOverlay {
    var displayName: string;
}
export type AutocompleteOverlayProps = ComponentProps<typeof AutocompleteOverlay>;
export default AutocompleteOverlay;
//# sourceMappingURL=AutocompleteOverlay.d.ts.map