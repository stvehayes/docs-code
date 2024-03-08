import React from 'react';
import { warning } from '../utils/warning.js';

/**
 * This custom hook simplifies the behavior of a component if it has state that
 * can be both controlled and uncontrolled. It functions identical to a
 * useState() hook and provides [state, setState] for you to use. You can use
 * the `onChange` argument to allow updates to the `state` to be communicated to
 * owners of controlled components.
 *
 * Note: This hook will warn if a component is switching from controlled to
 * uncontrolled, or vice-versa.
 */
function useControllableState({
  name = 'custom',
  defaultValue,
  value,
  onChange
}) {
  const [state, internalSetState] = React.useState(value !== null && value !== void 0 ? value : defaultValue);
  const controlled = React.useRef(null);
  const stableOnChange = React.useRef(onChange);
  React.useEffect(() => {
    stableOnChange.current = onChange;
  });
  if (controlled.current === null) {
    controlled.current = value !== undefined;
  }
  const setState = React.useCallback(stateOrUpdater => {
    var _stableOnChange$curre;
    const value = typeof stateOrUpdater === 'function' ?
    // @ts-ignore stateOrUpdater is a function
    stateOrUpdater(state) : stateOrUpdater;
    if (controlled.current === false) {
      internalSetState(value);
    }
    (_stableOnChange$curre = stableOnChange.current) === null || _stableOnChange$curre === void 0 ? void 0 : _stableOnChange$curre.call(stableOnChange, value);
  }, [state]);
  React.useEffect(() => {
    const controlledValue = value !== undefined;

    // Uncontrolled -> Controlled
    // If the component prop is uncontrolled, the prop value should be undefined
    if (controlled.current === false && controlledValue) {
      process.env.NODE_ENV !== "production" ? warning(true, 'A component is changing an uncontrolled %s component to be controlled. ' + 'This is likely caused by the value changing to a defined value ' + 'from undefined. Decide between using a controlled or uncontrolled ' + 'value for the lifetime of the component. ' + 'More info: https://reactjs.org/link/controlled-components', name) : void 0;
    }

    // Controlled -> Uncontrolled
    // If the component prop is controlled, the prop value should be defined
    if (controlled.current === true && !controlledValue) {
      process.env.NODE_ENV !== "production" ? warning(true, 'A component is changing a controlled %s component to be uncontrolled. ' + 'This is likely caused by the value changing to an undefined value ' + 'from a defined one. Decide between using a controlled or ' + 'uncontrolled value for the lifetime of the component. ' + 'More info: https://reactjs.org/link/controlled-components', name) : void 0;
    }
  }, [name, value]);
  if (controlled.current === true) {
    return [value, setState];
  }
  return [state, setState];
}

export { useControllableState };
