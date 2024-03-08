/// <reference types="react" />
import type { FileType, UnifiedFileSelectResult } from '../hooks/useUnifiedFileSelect';
import type { SyntheticChangeEmitter } from '../hooks/useSyntheticChange';
export type { FileType } from '../hooks/useUnifiedFileSelect';
type UploadProgress = [current: number, total: number];
type UseFileHandlingResult = UnifiedFileSelectResult & {
    errorMessage?: string;
    uploadProgress?: UploadProgress;
};
type UseFileHandlingProps = {
    repositoryId?: number;
    inputRef: React.RefObject<HTMLTextAreaElement>;
    emitChange: SyntheticChangeEmitter;
    disabled?: boolean;
    value: string;
    onUploadFile?: (file: File) => Promise<FileUploadResult>;
    acceptedFileTypes?: FileType[];
};
export type FileUploadResult = {
    /** The URL of the uploaded file. `null` if the upoad failed (or reject the promise). */
    url: string;
    /**
     * The file that was uploaded. Typically the client-side detected name, size, and content
     * type can be unreliable, so your file upload service may provide more accurate data. By
     * receiving an updated File instance with the more accurate data, the Markdown editor can
     * make better decisions.
     */
    file: File;
};
export declare const useFileHandling: ({ emitChange, value, inputRef, disabled, onUploadFile, acceptedFileTypes, }: UseFileHandlingProps) => UseFileHandlingResult | null;
//# sourceMappingURL=_useFileHandling.d.ts.map