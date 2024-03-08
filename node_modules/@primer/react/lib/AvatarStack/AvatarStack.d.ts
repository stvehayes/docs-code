import React from 'react';
import type { SxProp } from '../sx';
import type { ResponsiveValue } from '../hooks/useResponsiveValue';
export type AvatarStackProps = {
    alignRight?: boolean;
    disableExpand?: boolean;
    size?: number | ResponsiveValue<number>;
    children: React.ReactNode;
} & SxProp;
declare const AvatarStack: ({ children, alignRight, disableExpand, size, sx: sxProp }: AvatarStackProps) => React.JSX.Element;
export default AvatarStack;
//# sourceMappingURL=AvatarStack.d.ts.map