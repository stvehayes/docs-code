import type { HTMLAttributes } from 'react';
import React from 'react';
import type { SxProp } from '../sx';
export type CounterLabelProps = React.PropsWithChildren<HTMLAttributes<HTMLSpanElement> & {
    scheme?: 'primary' | 'secondary';
} & SxProp>;
declare const CounterLabel: React.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & {
    scheme?: "primary" | "secondary" | undefined;
} & SxProp & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSpanElement>>;
export default CounterLabel;
//# sourceMappingURL=CounterLabel.d.ts.map