import type { SxProp } from '../sx';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type ActionListHeadingProps = {
    as: HeadingLevels;
    visuallyHidden?: boolean;
} & SxProp;
export declare const Heading: PolymorphicForwardRefComponent<HeadingLevels, ActionListHeadingProps>;
export {};
//# sourceMappingURL=Heading.d.ts.map