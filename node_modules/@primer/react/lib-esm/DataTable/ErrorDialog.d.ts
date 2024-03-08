import React from 'react';
export type TableErrorDialogProps = React.PropsWithChildren<{
    /**
     * Provide an optional title for the dialog
     * @default 'Error'
     */
    title?: string;
    /**
     * Provide an optional handler to be called when the user confirms to retry
     */
    onRetry?: () => void;
    /**
     * Provide an optional handler to be called when the user dismisses the dialog
     */
    onDismiss?: () => void;
}>;
export declare function ErrorDialog({ title, children, onRetry, onDismiss }: TableErrorDialogProps): React.JSX.Element;
//# sourceMappingURL=ErrorDialog.d.ts.map