'use strict';

var React = require('react');
var ConfirmationDialog = require('../ConfirmationDialog/ConfirmationDialog.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function ErrorDialog({
  title = 'Error',
  children,
  onRetry,
  onDismiss
}) {
  return /*#__PURE__*/React__default.default.createElement(ConfirmationDialog.ConfirmationDialog, {
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

exports.ErrorDialog = ErrorDialog;
