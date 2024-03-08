import React from 'react';
import type { SxProp } from '../../sx';
import type { ItemInput } from './List';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../../utils/polymorphic';
import type { AriaRole } from '../../utils/types';
/**
 * Contract for props passed to the `Item` component.
 */
export interface ItemProps extends SxProp {
    /**
     * Primary text which names an `Item`.
     */
    text?: string;
    /**
     * Secondary text which provides additional information about an `Item`.
     */
    description?: string;
    /**
     * Secondary text style variations. Usage is discretionary.
     *
     * - `"inline"` - Secondary text is positioned beside primary text.
     * - `"block"` - Secondary text is positioned below primary text.
     */
    descriptionVariant?: 'inline' | 'block';
    /**
     * Icon (or similar) positioned before `Item` text.
     */
    leadingVisual?: React.ElementType;
    /**
     * @deprecated Use `trailingVisual` instead
     * Icon (or similar) positioned after `Item` text.
     */
    trailingIcon?: React.ElementType;
    /**
     * @deprecated Use `trailingVisual` instead
     * Text positioned after `Item` text and optional trailing icon.
     */
    trailingText?: string;
    /**
     * Icon or text positioned after `Item` text.
     */
    trailingVisual?: React.ElementType | React.ReactNode;
    /**
     * Style variations associated with various `Item` types.
     *
     * - `"default"` - An action `Item`.
     * - `"danger"` - A destructive action `Item`.
     */
    variant?: 'default' | 'danger';
    /**
     * Whether to display a divider above the `Item` when it does not follow a `Header` or `Divider`.
     */
    showDivider?: boolean;
    /**
     * For `Item`s which can be selected, whether the `Item` is currently selected.
     */
    selected?: boolean;
    /**
     *  For `Item`s which can be selected, whether `multiple` `Item`s or a `single` `Item` can be selected
     */
    selectionVariant?: 'single' | 'multiple';
    /**
     * Designates the group that an item belongs to.
     */
    groupId?: string;
    /**
     * Items that are disabled can not be clicked, selected, or navigated through.
     */
    disabled?: boolean;
    /**
     * Callback that will trigger both on click selection and keyboard selection.
     */
    onAction?: (item: ItemProps, event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * An id associated with this item.  Should be unique between items
     */
    id?: number | string;
    /**
     * Node to be included inside the item before the text.
     */
    children?: React.ReactNode;
    /**
     * The ARIA role describing the function of `List` component. `option` is a common value.
     */
    role?: AriaRole;
    /**
     * An item to pass back in the `onAction` callback, meant as
     */
    item?: ItemInput;
}
export declare const TextContainer: import("styled-components").StyledComponent<"span", any, {
    dangerouslySetInnerHtml?: React.DOMAttributes<HTMLDivElement>['dangerouslySetInnerHTML'];
}, never>;
/**
 * An actionable or selectable `Item` with an optional icon and description.
 */
export declare const Item: PolymorphicForwardRefComponent<"div", ItemProps>;
//# sourceMappingURL=Item.d.ts.map