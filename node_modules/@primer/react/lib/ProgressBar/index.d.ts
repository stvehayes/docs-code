/// <reference types="react" />
export type { ProgressBarProps } from './ProgressBar';
/**
 * Collection of ProgressBar related components.
 */
export declare const ProgressBar: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLSpanElement> & {
    bg?: string | undefined;
} & {
    inline?: boolean | undefined;
    barSize?: "small" | "default" | "large" | undefined;
    animated?: boolean | undefined;
} & import("styled-system").WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & import("..").SxProp & {
    progress?: string | number | undefined;
} & import("react").RefAttributes<HTMLSpanElement>> & {
    Item: import("styled-components").StyledComponent<"span", any, {
        progress?: string | number | undefined;
    } & import("..").SxProp, never>;
};
//# sourceMappingURL=index.d.ts.map