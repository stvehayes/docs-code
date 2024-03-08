import React from 'react';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import type { ActionListItemProps } from './shared';
type LinkProps = {
    download?: string;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy'];
};
export type ActionListLinkItemProps = Pick<ActionListItemProps, 'active' | 'children' | 'sx' | 'inactiveText'> & LinkProps;
export declare const LinkItem: PolymorphicForwardRefComponent<"a", ActionListLinkItemProps>;
export {};
//# sourceMappingURL=LinkItem.d.ts.map