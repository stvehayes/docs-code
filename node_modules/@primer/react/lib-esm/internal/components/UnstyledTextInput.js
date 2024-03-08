import styled from 'styled-components';
import sx from '../../sx.js';

const UnstyledTextInput = styled.input.withConfig({
  displayName: "UnstyledTextInput",
  componentId: "sc-14ypya-0"
})(["border:0;font-size:inherit;font-family:inherit;background-color:transparent;-webkit-appearance:none;color:inherit;width:100%;&:focus{outline:0;}", ";"], sx);

export { UnstyledTextInput as default };
