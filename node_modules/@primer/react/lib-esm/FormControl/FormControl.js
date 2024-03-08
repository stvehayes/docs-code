import React, { useContext } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete.js';
import Box from '../Box/Box.js';
import Checkbox from '../Checkbox/Checkbox.js';
import Radio from '../Radio/Radio.js';
import Select from '../Select.js';
import TextInput from '../TextInput/TextInput.js';
import TextInputWithTokens from '../TextInputWithTokens/TextInputWithTokens.js';
import Textarea from '../Textarea/Textarea.js';
import '../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroup.js';
import CheckboxOrRadioGroupContext from '../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroupContext.js';
import ValidationAnimationContainer from '../internal/components/ValidationAnimationContainer.js';
import { get } from '../constants.js';
import { useSlots } from '../hooks/useSlots.js';
import { useId } from '../hooks/useId.js';
import FormControlCaption from './_FormControlCaption.js';
import FormControlLabel from './_FormControlLabel.js';
import FormControlLeadingVisual from './_FormControlLeadingVisual.js';
import FormControlValidation from './_FormControlValidation.js';
import { FormControlContextProvider } from './_FormControlContext.js';

const FormControl = /*#__PURE__*/React.forwardRef(({
  children,
  disabled: disabledProp,
  layout = 'vertical',
  id: idProp,
  required,
  sx
}, ref) => {
  var _slots$validation, _slots$label, _slots$label2;
  const [slots, childrenWithoutSlots] = useSlots(children, {
    caption: FormControlCaption,
    label: FormControlLabel,
    leadingVisual: FormControlLeadingVisual,
    validation: FormControlValidation
  });
  const expectedInputComponents = [Autocomplete, Checkbox, Radio, Select, TextInput, TextInputWithTokens, Textarea];
  const choiceGroupContext = useContext(CheckboxOrRadioGroupContext);
  const disabled = choiceGroupContext.disabled || disabledProp;
  const id = useId(idProp);
  const validationMessageId = slots.validation ? `${id}-validationMessage` : undefined;
  const captionId = slots.caption ? `${id}-caption` : undefined;
  const validationStatus = (_slots$validation = slots.validation) === null || _slots$validation === void 0 ? void 0 : _slots$validation.props.variant;
  const InputComponent = childrenWithoutSlots.find(child => expectedInputComponents.some(inputComponent => /*#__PURE__*/React.isValidElement(child) && child.type === inputComponent));
  const inputProps = /*#__PURE__*/React.isValidElement(InputComponent) && InputComponent.props;
  const isChoiceInput = /*#__PURE__*/React.isValidElement(InputComponent) && (InputComponent.type === Checkbox || InputComponent.type === Radio);
  if (InputComponent) {
    if (inputProps !== null && inputProps !== void 0 && inputProps.id) {
      // eslint-disable-next-line no-console
      console.warn(`instead of passing the 'id' prop directly to the input component, it should be passed to the parent component, <FormControl>`);
    }
    if (inputProps !== null && inputProps !== void 0 && inputProps.disabled) {
      // eslint-disable-next-line no-console
      console.warn(`instead of passing the 'disabled' prop directly to the input component, it should be passed to the parent component, <FormControl>`);
    }
    if (inputProps !== null && inputProps !== void 0 && inputProps.required) {
      // eslint-disable-next-line no-console
      console.warn(`instead of passing the 'required' prop directly to the input component, it should be passed to the parent component, <FormControl>`);
    }
  }
  if (!slots.label) {
    // eslint-disable-next-line no-console
    console.error(`The input field with the id ${id} MUST have a FormControl.Label child.\n\nIf you want to hide the label, pass the 'visuallyHidden' prop to the FormControl.Label component.`);
  }
  if (isChoiceInput) {
    if (slots.validation) {
      // eslint-disable-next-line no-console
      console.warn('Validation messages are not rendered for an individual checkbox or radio. The validation message should be shown for all options.');
    }
    if (childrenWithoutSlots.find(child => {
      var _child$props;
      return /*#__PURE__*/React.isValidElement(child) && ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.required);
    })) {
      // eslint-disable-next-line no-console
      console.warn('An individual checkbox or radio cannot be a required field.');
    }
  } else {
    if (slots.leadingVisual) {
      // eslint-disable-next-line no-console
      console.warn('A leading visual is only rendered for a checkbox or radio form control. If you want to render a leading visual inside of your input, check if your input supports a leading visual.');
    }
  }
  const isLabelHidden = (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.props.visuallyHidden;
  return /*#__PURE__*/React.createElement(FormControlContextProvider, {
    value: {
      captionId,
      disabled,
      id,
      required,
      validationMessageId
    }
  }, isChoiceInput || layout === 'horizontal' ? /*#__PURE__*/React.createElement(Box, {
    ref: ref,
    display: "flex",
    alignItems: slots.leadingVisual ? 'center' : undefined,
    sx: sx
  }, /*#__PURE__*/React.createElement(Box, {
    sx: {
      '> input': {
        marginLeft: 0,
        marginRight: 0
      }
    }
  }, /*#__PURE__*/React.isValidElement(InputComponent) && /*#__PURE__*/React.cloneElement(InputComponent, {
    id,
    disabled,
    ['aria-describedby']: captionId
  }), childrenWithoutSlots.filter(child => /*#__PURE__*/React.isValidElement(child) && ![Checkbox, Radio].some(inputComponent => child.type === inputComponent))), slots.leadingVisual && /*#__PURE__*/React.createElement(Box, {
    color: disabled ? 'fg.muted' : 'fg.default',
    sx: {
      '> *': {
        minWidth: slots.caption ? get('fontSizes.4') : get('fontSizes.2'),
        minHeight: slots.caption ? get('fontSizes.4') : get('fontSizes.2'),
        fill: 'currentColor'
      }
    },
    ml: 2
  }, slots.leadingVisual), !((_slots$label2 = slots.label) !== null && _slots$label2 !== void 0 && _slots$label2.props.visuallyHidden) || slots.caption ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    ml: 2
  }, slots.label, slots.caption) : /*#__PURE__*/React.createElement(React.Fragment, null, slots.label, slots.caption)) : /*#__PURE__*/React.createElement(Box, {
    ref: ref,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    sx: {
      ...(isLabelHidden ? {
        '> *:not(label) + *': {
          marginTop: 1
        }
      } : {
        '> * + *': {
          marginTop: 1
        }
      }),
      ...sx
    }
  }, slots.label, /*#__PURE__*/React.isValidElement(InputComponent) && /*#__PURE__*/React.cloneElement(InputComponent, Object.assign({
    id,
    required,
    disabled,
    validationStatus,
    ['aria-describedby']: [validationMessageId, captionId].filter(Boolean).join(' ')
  }, InputComponent.props)), childrenWithoutSlots.filter(child => /*#__PURE__*/React.isValidElement(child) && !expectedInputComponents.some(inputComponent => child.type === inputComponent)), slots.validation ? /*#__PURE__*/React.createElement(ValidationAnimationContainer, {
    show: true
  }, slots.validation) : null, slots.caption));
});
var FormControl$1 = Object.assign(FormControl, {
  Caption: FormControlCaption,
  Label: FormControlLabel,
  LeadingVisual: FormControlLeadingVisual,
  Validation: FormControlValidation
});

export { FormControl$1 as default };
