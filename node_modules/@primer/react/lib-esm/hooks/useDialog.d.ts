/// <reference types="react" />
type UseDialogParameters = {
    modalRef: React.RefObject<HTMLElement>;
    overlayRef: React.RefObject<HTMLElement>;
    isOpen?: boolean;
    onDismiss?: () => void;
    initialFocusRef?: React.RefObject<HTMLElement>;
    closeButtonRef?: React.RefObject<HTMLElement>;
    returnFocusRef?: React.RefObject<HTMLElement>;
};
declare function useDialog({ modalRef, overlayRef, isOpen, onDismiss, initialFocusRef, closeButtonRef, }: UseDialogParameters): {
    getDialogProps: () => {
        onKeyDown: (event: React.KeyboardEvent) => void;
    };
};
export default useDialog;
//# sourceMappingURL=useDialog.d.ts.map