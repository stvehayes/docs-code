import type React from 'react';
import type { Theme } from '../ThemeProvider';
export declare const UnderlineNavContext: React.Context<{
    theme: Theme | undefined;
    setChildrenWidth: React.Dispatch<{
        text: string;
        width: number;
    }>;
    setNoIconChildrenWidth: React.Dispatch<{
        text: string;
        width: number;
    }>;
    loadingCounters: boolean;
    iconsVisible: boolean;
}>;
//# sourceMappingURL=UnderlineNavContext.d.ts.map