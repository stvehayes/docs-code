import React from 'react';
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog.js';

function ErrorDialog({
  title = 'Error',
  children,
  onRetry,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement(ConfirmationDialog, {
    title: title,
    onClose: gesture => {
      if (gesture === 'confirm') {
        onRetry === null || onRetry === void 0 ? void 0 : onRetry();
      } else {
        onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
      }
    },
    confirmButtonContent: "Retry",
    cancelButtonContent: "Dismiss"
  }, children);
}
ErrorDialog.displayName = "ErrorDialog";

export { ErrorDialog };
