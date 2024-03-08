import type React from 'react';
export type TouchOrMouseEvent = MouseEvent | TouchEvent;
export type UseOnOutsideClickSettings = {
    containerRef: React.RefObject<HTMLDivElement> | React.RefObject<HTMLUListElement>;
    ignoreClickRefs?: React.RefObject<HTMLElement>[];
    onClickOutside: (e: TouchOrMouseEvent) => void;
};
export declare const useOnOutsideClick: ({ containerRef, ignoreClickRefs, onClickOutside }: UseOnOutsideClickSettings) => void;
//# sourceMappingURL=useOnOutsideClick.d.ts.map