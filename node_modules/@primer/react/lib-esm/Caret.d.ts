import React from 'react';
import type { Theme } from './ThemeProvider';
type Location = 'top' | 'top-left' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom';
export type CaretProps = {
    bg?: string;
    borderColor?: string;
    borderWidth?: string | number;
    size?: number;
    location?: Location;
    theme?: Theme;
};
declare function Caret(props: CaretProps): React.JSX.Element;
declare namespace Caret {
    var locations: string[];
}
export default Caret;
//# sourceMappingURL=Caret.d.ts.map