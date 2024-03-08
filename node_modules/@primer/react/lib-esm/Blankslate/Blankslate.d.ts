import React from 'react';
export type BlankslateProps = React.PropsWithChildren<{
    /**
     * Add a border around this component
     */
    border?: boolean;
    /**
     * Constrain the maximum width of this component
     */
    narrow?: boolean;
    /**
     * Increase the padding of this component
     */
    spacious?: boolean;
}>;
declare function Blankslate({ border, children, narrow, spacious }: BlankslateProps): React.JSX.Element;
export type VisualProps = React.PropsWithChildren;
declare function Visual({ children }: VisualProps): React.JSX.Element;
export type HeadingProps = React.PropsWithChildren<{
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;
declare function Heading({ as, children }: HeadingProps): React.JSX.Element;
export type DescriptionProps = React.PropsWithChildren;
declare function Description({ children }: DescriptionProps): React.JSX.Element;
export type PrimaryActionProps = React.PropsWithChildren<{
    href: string;
}>;
declare function PrimaryAction({ children, href }: PrimaryActionProps): React.JSX.Element;
export type SecondaryActionProps = React.PropsWithChildren<{
    href: string;
}>;
declare function SecondaryAction({ children, href }: SecondaryActionProps): React.JSX.Element;
declare const _default: typeof Blankslate & {
    Visual: typeof Visual;
    Heading: typeof Heading;
    Description: typeof Description;
    PrimaryAction: typeof PrimaryAction;
    SecondaryAction: typeof SecondaryAction;
};
export default _default;
//# sourceMappingURL=Blankslate.d.ts.map