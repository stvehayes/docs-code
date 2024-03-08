/// <reference types="react" />
type TopLevelMimeType = 'application' | 'audio' | 'font' | 'image' | 'model' | 'text' | 'video' | 'message' | 'multipart';
type MimeType = `${TopLevelMimeType}/${string}`;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers */
export type FileType = `.${string}` | MimeType;
type CommonFileSelectProps = {
    acceptedFileTypes?: Array<FileType>;
};
export type SingleFileSelectProps = CommonFileSelectProps & {
    onSelect: (accepted?: File, rejected?: File) => void;
    multi?: false;
};
export type MultiFileSelectProps = CommonFileSelectProps & {
    onSelect: (accepted: Array<File>, rejected: Array<File>) => void;
    multi: true;
};
export type FileSelectProps = SingleFileSelectProps | MultiFileSelectProps;
type PasteTargetProps = {
    onPaste: React.ClipboardEventHandler;
};
type ClickTargetProps = {
    onClick: React.MouseEventHandler;
};
type DropTargetProps = {
    onDragEnter: React.DragEventHandler;
    onDragLeave: React.DragEventHandler;
    onDrop: React.DragEventHandler;
    onDragOver: React.DragEventHandler;
};
export type UnifiedFileSelectResult = {
    pasteTargetProps: PasteTargetProps;
    clickTargetProps: ClickTargetProps;
    dropTargetProps: DropTargetProps;
    isDraggedOver: boolean;
};
/**
 * Provides event handlers for all types of file upload targets, unifying events into a
 * single `onSelect` event. Does not manage its own state as far as which files are
 * currently selected - this should be done in the parent component.
 *
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
export declare function useUnifiedFileSelect(props: FileSelectProps): UnifiedFileSelectResult;
/**
 * Provides a click event handler for opening a file select dialog. Calls `onSelect` upon
 * completion.
 *
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
export declare function useClickFileSelect(props: FileSelectProps): ClickTargetProps;
/**
 * Provides event handlers for a file drop region. Calls `onSelect` upon drop. Note that
 * drop targets alone are not accessible - combine with a click target.
 * @return Tuple of `[isDraggedOver, dropTargetProps]` where `isDraggedOver` is true if a valid item
 * is dragged over the drop target and `dropTargetProps` should be spread to the drop
 * target.
 *
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
export declare function useDropFileSelect(props: FileSelectProps): [isDraggedOver: boolean, dropTargetProps: DropTargetProps];
/**
 * Provides a paste event handler for pasting files. Props should be spread on an element
 * with `contenteditable` or a text input/textarea.
 *
 * @deprecated Will be removed in v37 (https://github.com/primer/react/issues/3604)
 */
export declare function usePasteFileSelect(props: FileSelectProps): PasteTargetProps;
export {};
//# sourceMappingURL=useUnifiedFileSelect.d.ts.map