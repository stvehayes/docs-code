import React from 'react';
import type { SxProp } from '../sx';
export type LabelGroupProps = {
    /** How hidden tokens should be shown. `'inline'` shows the hidden tokens after the visible tokens. `'overlay'` shows all tokens in an overlay that appears on top of the visible tokens. */
    overflowStyle?: 'inline' | 'overlay';
    /** How many tokens to show. `'auto'` truncates the tokens to fit in the parent container. Passing a number will truncate after that number tokens. If this is undefined, tokens will never be truncated. */
    visibleChildCount?: 'auto' | number;
} & SxProp;
declare const LabelGroup: React.FC<React.PropsWithChildren<LabelGroupProps>>;
export default LabelGroup;
//# sourceMappingURL=LabelGroup.d.ts.map