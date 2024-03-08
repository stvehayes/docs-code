import type React from 'react';
export type UseOpenAndCloseFocusSettings = {
    initialFocusRef?: React.RefObject<HTMLElement>;
    containerRef: React.RefObject<HTMLElement>;
    returnFocusRef: React.RefObject<HTMLElement>;
    preventFocusOnOpen?: boolean;
};
export declare function useOpenAndCloseFocus({ initialFocusRef, returnFocusRef, containerRef, preventFocusOnOpen, }: UseOpenAndCloseFocusSettings): void;
//# sourceMappingURL=useOpenAndCloseFocus.d.ts.map