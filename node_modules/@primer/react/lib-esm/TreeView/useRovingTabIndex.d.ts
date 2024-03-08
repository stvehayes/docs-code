import type React from 'react';
export declare function useRovingTabIndex({ containerRef, mouseDownRef, }: {
    containerRef: React.RefObject<HTMLElement>;
    mouseDownRef: React.RefObject<boolean>;
}): void;
export declare function getNextFocusableElement(activeElement: HTMLElement, event: KeyboardEvent): HTMLElement | undefined;
export declare function getElementState(element: HTMLElement): 'open' | 'closed' | 'end';
export declare function getVisibleElement(element: HTMLElement, direction: 'next' | 'previous'): HTMLElement | undefined;
export declare function getFirstChildElement(element: HTMLElement): HTMLElement | undefined;
export declare function getParentElement(element: HTMLElement): HTMLElement | undefined;
export declare function getFirstElement(element: HTMLElement): HTMLElement | undefined;
export declare function getLastElement(element: HTMLElement): HTMLElement | undefined;
//# sourceMappingURL=useRovingTabIndex.d.ts.map