/// <reference types="react" />
import type { TouchOrMouseEvent } from './useOnOutsideClick';
export type UseOverlaySettings = {
    ignoreClickRefs?: React.RefObject<HTMLElement>[];
    initialFocusRef?: React.RefObject<HTMLElement>;
    returnFocusRef: React.RefObject<HTMLElement>;
    onEscape: (e: KeyboardEvent) => void;
    onClickOutside: (e: TouchOrMouseEvent) => void;
    overlayRef?: React.RefObject<HTMLDivElement>;
    preventFocusOnOpen?: boolean;
};
export type OverlayReturnProps = {
    ref: React.RefObject<HTMLDivElement>;
};
export declare const useOverlay: ({ overlayRef: _overlayRef, returnFocusRef, initialFocusRef, onEscape, ignoreClickRefs, onClickOutside, preventFocusOnOpen, }: UseOverlaySettings) => OverlayReturnProps;
//# sourceMappingURL=useOverlay.d.ts.map