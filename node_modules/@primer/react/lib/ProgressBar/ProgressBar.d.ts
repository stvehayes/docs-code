import React from 'react';
import type { WidthProps } from 'styled-system';
import type { SxProp } from '../sx';
type ProgressProp = {
    progress?: string | number;
};
export declare const Item: import("styled-components").StyledComponent<"span", any, ProgressProp & SxProp, never>;
declare const sizeMap: {
    small: string;
    large: string;
    default: string;
};
type StyledProgressContainerProps = {
    inline?: boolean;
    barSize?: keyof typeof sizeMap;
    animated?: boolean;
} & WidthProps & SxProp;
export type ProgressBarProps = React.HTMLAttributes<HTMLSpanElement> & {
    bg?: string;
} & StyledProgressContainerProps & ProgressProp;
export declare const ProgressBar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    bg?: string | undefined;
} & {
    inline?: boolean | undefined;
    barSize?: "small" | "default" | "large" | undefined;
    animated?: boolean | undefined;
} & WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & SxProp & ProgressProp & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=ProgressBar.d.ts.map