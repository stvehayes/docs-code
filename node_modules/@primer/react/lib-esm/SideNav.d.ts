/// <reference types="hoist-non-react-statics" />
import type { To } from 'history';
import type { ComponentProps } from './utils/types';
import React from 'react';
import type { SxProp } from './sx';
type SideNavBaseProps = {
    variant?: 'lightweight' | 'normal';
    bordered?: boolean;
    className?: string;
    children?: React.ReactNode;
    'aria-label'?: string;
};
declare function SideNavBase({ variant, className, bordered, children, 'aria-label': ariaLabel }: SideNavBaseProps): React.JSX.Element;
declare const SideNav: import("styled-components").StyledComponent<typeof SideNavBase, any, SxProp, never>;
type StyledSideNavLinkProps = {
    to?: To;
    selected?: boolean;
    variant?: 'full' | 'normal';
};
declare const SideNavLink: import("styled-components").StyledComponent<import("./utils/polymorphic").ForwardRefComponent<"a", {
    hoverColor?: string | undefined;
    muted?: boolean | undefined;
    underline?: boolean | undefined;
    inline?: boolean | undefined;
} & SxProp>, any, StyledSideNavLinkProps & SxProp, never>;
export type SideNavProps = ComponentProps<typeof SideNav>;
export type SideNavLinkProps = ComponentProps<typeof SideNavLink>;
/** @deprecated Use [NavList](https://primer.style/react/NavList) instead */
declare const _default: string & import("styled-components").StyledComponentBase<typeof SideNavBase, any, SxProp, never> & import("hoist-non-react-statics").NonReactStatics<typeof SideNavBase, {}> & {
    Link: import("styled-components").StyledComponent<import("./utils/polymorphic").ForwardRefComponent<"a", {
        hoverColor?: string | undefined;
        muted?: boolean | undefined;
        underline?: boolean | undefined;
        inline?: boolean | undefined;
    } & SxProp>, any, StyledSideNavLinkProps & SxProp, never>;
};
export default _default;
//# sourceMappingURL=SideNav.d.ts.map