'use strict';

var React = require('react');
var Autocomplete = require('../Autocomplete/Autocomplete.js');
var Box = require('../Box/Box.js');
var Checkbox = require('../Checkbox/Checkbox.js');
var Radio = require('../Radio/Radio.js');
var Select = require('../Select.js');
var TextInput = require('../TextInput/TextInput.js');
var TextInputWithTokens = require('../TextInputWithTokens/TextInputWithTokens.js');
var Textarea = require('../Textarea/Textarea.js');
require('../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroup.js');
var CheckboxOrRadioGroupContext = require('../internal/components/CheckboxOrRadioGroup/CheckboxOrRadioGroupContext.js');
var ValidationAnimationContainer = require('../internal/components/ValidationAnimationContainer.js');
var constants = require('../constants.js');
var useSlots = require('../hooks/useSlots.js');
var useId = require('../hooks/useId.js');
var _FormControlCaption = require('./_FormControlCaption.js');
var _FormControlLabel = require('./_FormControlLabel.js');
var _FormControlLeadingVisual = require('./_FormControlLeadingVisual.js');
var _FormControlValidation = require('./_FormControlValidation.js');
var _FormControlContext = require('./_FormControlContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControl = /*#__PURE__*/React__default.default.forwardRef(({
  children,
  disabled: disabledProp,
  layout = 'vertical',
  id: idProp,
  required,
  sx
}, ref) => {
  var _slots$validation, _slots$label, _slots$label2;
  const [slots, childrenWithoutSlots] = useSlots.useSlots(children, {
    caption: _FormControlCaption,
    label: _FormControlLabel,
    leadingVisual: _FormControlLeadingVisual,
    validation: _FormControlValidation
  });
  const expectedInputComponents = [Autocomplete, Checkbox, Radio, Select, TextInput, TextInputWithTokens, Textarea.default];
  const choiceGroupContext = React.useContext(CheckboxOrRadioGroupContext);
  const disabled = choiceGroupContext.disabled || disabledProp;
  const id = useId.useId(idProp);
  const validationMessageId = slots.validation ? `${id}-validationMessage` : undefined;
  const captionId = slots.caption ? `${id}-caption` : undefined;
  const validationStatus = (_slots$validation = slots.validation) === null || _slots$validation === void 0 ? void 0 : _slots$validation.props.variant;
  const InputComponent = childrenWithoutSlots.find(child => expectedInputComponents.some(inputComponent => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === inputComponent));
  const inputProps = /*#__PURE__*/React__default.default.isValidElement(InputComponent) && InputComponent.props;
  const isChoiceInput = /*#__PURE__*/React__default.default.isValidElement(InputComponent) && (InputComponent.type === Checkbox || InputComponent.type === Radio);
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
      return /*#__PURE__*/React__default.default.isValidElement(child) && ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.required);
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
  return /*#__PURE__*/React__default.default.createElement(_FormControlContext.FormControlContextProvider, {
    value: {
      captionId,
      disabled,
      id,
      required,
      validationMessageId
    }
  }, isChoiceInput || layout === 'horizontal' ? /*#__PURE__*/React__default.default.createElement(Box, {
    ref: ref,
    display: "flex",
    alignItems: slots.leadingVisual ? 'center' : undefined,
    sx: sx
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      '> input': {
        marginLeft: 0,
        marginRight: 0
      }
    }
  }, /*#__PURE__*/React__default.default.isValidElement(InputComponent) && /*#__PURE__*/React__default.default.cloneElement(InputComponent, {
    id,
    disabled,
    ['aria-describedby']: captionId
  }), childrenWithoutSlots.filter(child => /*#__PURE__*/React__default.default.isValidElement(child) && ![Checkbox, Radio].some(inputComponent => child.type === inputComponent))), slots.leadingVisual && /*#__PURE__*/React__default.default.createElement(Box, {
    color: disabled ? 'fg.muted' : 'fg.default',
    sx: {
      '> *': {
        minWidth: slots.caption ? constants.get('fontSizes.4') : constants.get('fontSizes.2'),
        minHeight: slots.caption ? constants.get('fontSizes.4') : constants.get('fontSizes.2'),
        fill: 'currentColor'
      }
    },
    ml: 2
  }, slots.leadingVisual), !((_slots$label2 = slots.label) !== null && _slots$label2 !== void 0 && _slots$label2.props.visuallyHidden) || slots.caption ? /*#__PURE__*/React__default.default.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    ml: 2
  }, slots.label, slots.caption) : /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, slots.label, slots.caption)) : /*#__PURE__*/React__default.default.createElement(Box, {
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
  }, slots.label, /*#__PURE__*/React__default.default.isValidElement(InputComponent) && /*#__PURE__*/React__default.default.cloneElement(InputComponent, Object.assign({
    id,
    required,
    disabled,
    validationStatus,
    ['aria-describedby']: [validationMessageId, captionId].filter(Boolean).join(' ')
  }, InputComponent.props)), childrenWithoutSlots.filter(child => /*#__PURE__*/React__default.default.isValidElement(child) && !expectedInputComponents.some(inputComponent => child.type === inputComponent)), slots.validation ? /*#__PURE__*/React__default.default.createElement(ValidationAnimationContainer, {
    show: true
  }, slots.validation) : null, slots.caption));
});
var FormControl$1 = Object.assign(FormControl, {
  Caption: _FormControlCaption,
  Label: _FormControlLabel,
  LeadingVisual: _FormControlLeadingVisual,
  Validation: _FormControlValidation
});

module.exports = FormControl$1;
