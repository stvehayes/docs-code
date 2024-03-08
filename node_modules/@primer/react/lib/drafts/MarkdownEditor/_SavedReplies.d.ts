import type { RefObject } from 'react';
import React from 'react';
export type SavedReply = {
    name: string;
    content: string;
};
export type SavedRepliesHandle = {
    openMenu: () => void;
};
type SavedRepliesContext = null | {
    onSelect: (savedReply: SavedReply) => void;
    savedReplies: SavedReply[];
    /** Ref to the button for clicking via keyboard shortcut. */
    ref: RefObject<SavedRepliesHandle>;
};
export declare const SavedRepliesContext: React.Context<SavedRepliesContext>;
export declare const SavedRepliesButton: () => React.JSX.Element;
export {};
//# sourceMappingURL=_SavedReplies.d.ts.map