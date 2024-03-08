import type { SystemCssProperties, SystemStyleObject } from '@styled-system/css';
import type { ThemeColorPaths, ThemeShadowPaths } from './theme';
import type { ColorProps, BorderColorProps, ShadowProps } from 'styled-system';
import merge from 'deepmerge';
export type BetterCssProperties = {
    [K in keyof SystemCssProperties]: K extends keyof ColorProps ? ThemeColorPaths | SystemCssProperties[K] : K extends keyof BorderColorProps ? ThemeColorPaths | SystemCssProperties[K] : K extends keyof ShadowProps ? ThemeShadowPaths | SystemCssProperties[K] : SystemCssProperties[K];
};
export type CSSCustomProperties = {
    [key: `--${string}`]: string | number;
};
type CSSSelectorObject = {
    [cssSelector: string]: SystemStyleObject | CSSCustomProperties;
};
export type BetterSystemStyleObject = BetterCssProperties | SystemStyleObject | CSSCustomProperties | CSSSelectorObject;
export interface SxProp {
    sx?: BetterSystemStyleObject;
}
declare const sx: (props: SxProp) => import("@styled-system/css").CssFunctionReturnType;
export default sx;
export { merge };
//# sourceMappingURL=sx.d.ts.map