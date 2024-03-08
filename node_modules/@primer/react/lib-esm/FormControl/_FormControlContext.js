import { createContext, useContext } from 'react';

const FormControlContext = /*#__PURE__*/createContext(null);
const FormControlContextProvider = FormControlContext.Provider;

/** This is the private/internal interface for subcomponents of `FormControl`. */
function useFormControlContext() {
  var _useContext;
  return (_useContext = useContext(FormControlContext)) !== null && _useContext !== void 0 ? _useContext : {};
}

/**
 * Make any component compatible with `FormControl`'s automatic wiring up of accessibility attributes & validation by
 * reading the props from this hook and merging them with the passed-in props. If used outside of `FormControl`, this
 * hook has no effect.
 *
 * @param externalProps The external props passed to this component. If provided, these props will be merged with the
 * `FormControl` props, with external props taking priority.
 */

/**
 * Make any component compatible with `FormControl`'s automatic wiring up of accessibility attributes & validation by
 * reading the props from this hook and handling them / assigning them to the underlying form control. If used outside
 * of `FormControl`, this hook has no effect.
 */

function useFormControlForwardedProps(externalProps = {}) {
  const context = useContext(FormControlContext);
  if (!context) return externalProps;
  return {
    disabled: context.disabled,
    id: context.id,
    required: context.required,
    validationStatus: context.validationStatus,
    ['aria-describedby']: [context.validationMessageId, context.captionId].filter(Boolean).join(' ') || undefined,
    ...externalProps
  };
}

export { FormControlContextProvider, useFormControlContext, useFormControlForwardedProps };
