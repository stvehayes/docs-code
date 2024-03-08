import type { RefObject } from 'react';
export type ResizeObserverCallback = (entries: ResizeObserverEntry[]) => void;
export interface ResizeObserverEntry {
    contentRect: DOMRectReadOnly;
}
export declare function useResizeObserver<T extends HTMLElement>(callback: ResizeObserverCallback, target?: RefObject<T>): void;
//# sourceMappingURL=useResizeObserver.d.ts.map