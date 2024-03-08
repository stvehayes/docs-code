import type { SxProp } from '../sx';
import type { ComponentProps } from '../utils/types';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type StyledLinkProps = {
    hoverColor?: string;
    muted?: boolean;
    /** @deprecated use `inline` to specify the type of link instead */
    underline?: boolean;
    inline?: boolean;
} & SxProp;
declare const Link: PolymorphicForwardRefComponent<"a", StyledLinkProps>;
export type LinkProps = ComponentProps<typeof Link>;
export default Link;
//# sourceMappingURL=Link.d.ts.map