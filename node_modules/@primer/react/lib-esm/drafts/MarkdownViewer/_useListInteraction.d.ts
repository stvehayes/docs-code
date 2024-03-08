import type { ListItem } from '../MarkdownEditor/_useListEditing';
type TaskListItem = ListItem & {
    taskBox: '[ ]' | '[x]';
};
export declare const parseCodeFenceBegin: (line: string) => string | null;
export declare const isCodeFenceEnd: (line: string, fence: string) => boolean;
export declare const isTaskListItem: (item: ListItem | null) => item is TaskListItem;
type UseListInteractionSettings = {
    htmlContainer?: HTMLElement;
    markdownValue: string;
    onChange: (markdown: string) => void | Promise<void>;
    disabled?: boolean;
    dependencies?: Array<unknown>;
};
/**
 * Adds support for list interaction to rendered Markdown.
 *
 * Currently only supports checking / unchecking list items - reordering and task-item to
 * issue conversion are not supported yet.
 */
export declare const useListInteraction: ({ htmlContainer, markdownValue, onChange, disabled, dependencies, }: UseListInteractionSettings) => void;
export {};
//# sourceMappingURL=_useListInteraction.d.ts.map