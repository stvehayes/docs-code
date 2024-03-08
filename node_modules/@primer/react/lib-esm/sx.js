import css from '@styled-system/css';
export { default as merge } from 'deepmerge';

// Support CSS custom properties in the `sx` prop

const sx = props => css(props.sx);

export { sx as default };
