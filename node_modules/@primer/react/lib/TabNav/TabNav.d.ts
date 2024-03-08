import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import type { To } from 'history';
import React from 'react';
import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
declare const TabNavBase: import("styled-components").StyledComponent<"div", any, SxProp, never>;
export type TabNavProps = ComponentProps<typeof TabNavBase>;
declare function TabNav({ children, 'aria-label': ariaLabel, ...rest }: TabNavProps): React.JSX.Element;
export type TabNavLinkProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    to?: To;
    selected?: boolean;
    href?: string;
} & SxProp;
declare const _default: typeof TabNav & {
    Link: PolymorphicForwardRefComponent<"a", TabNavLinkProps>;
};
export default _default;
//# sourceMappingURL=TabNav.d.ts.map