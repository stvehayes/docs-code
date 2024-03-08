import type { RefObject } from 'react';
import type { FormattingTools } from './_FormattingTools';
import type { ButtonProps } from '../../Button';
type MarkdownEditorContextProps = {
    disabled: boolean;
    condensed: boolean;
    required: boolean;
    formattingToolsRef: RefObject<FormattingTools>;
    uploadButtonProps: Partial<ButtonProps> | null;
    fileUploadProgress?: [number, number];
    fileDraggedOver: boolean;
    errorMessage?: string;
    previewMode: boolean;
};
export declare const MarkdownEditorContext: import("react").Context<MarkdownEditorContextProps>;
export {};
//# sourceMappingURL=_MarkdownEditorContext.d.ts.map