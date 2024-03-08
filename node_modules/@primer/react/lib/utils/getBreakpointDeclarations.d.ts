import type { ResponsiveValue } from '../hooks/useResponsiveValue';
import type { BetterSystemStyleObject } from '../sx';
import type { Properties as CSSProperties } from 'csstype';
/**
 * This function is inspired by the `useResponsiveValue` hook and it's used to render responsive values with CSS.
 * @param value - The value that needs to be rendered responsively
 * @param cssProperty - The CSS property whoes value needs to be rendered responsively
 * @param mapFn - A function that maps the given value to a CSS value
 *
 * If the value is responsive, it will only return the given viewports' breakpoints as CSS rules
 * with the given CSS property and their mapped value. For viewports that are not specified,
 * we need to provide a fallback CSS declaration in the component's sx prop along with the styles
 * that will return from this function.
 *
 * @example
 * getBreakpointDeclarations({narrow: true, regular: true, wide: false}, 'display', value => {
      return value ? 'none' : 'flex'
    })
 * @returns
 * {
 *   "@media screen and (max-width: 768px)": {
 *     "display": "none"
 *   },
 *   "@media screen and (min-width: 768px)": {
 *     "display": "none"
 *   },
 *   "@media screen and (min-width: 1440px)": {
 *     "display": "flex"
 *   }
 * }
 *
 * * @example
 * getBreakpointDeclarations({regular: 'border.default', wide: 'canvas.inset'}, 'backgroundColor', (value): string => {
    return value
  })
 * @returns
 * {
 *   "@media screen and (min-width: 768px)": {
 *     "backgroundColor": "border.default"
 *   },
 *   "@media screen and (min-width: 1440px)": {
 *     "backgroundColor": "canvas.inset"
 *   }
 * }
 *
 * * @example
* getBreakpointDeclarations({narrow: 'filled', regular: 'line'}, 'height', (value): string => {
    return {
      filled: 8,
      line: 1,
    }[value]
  })
 * @returns
 * {
 *  "@media screen and (max-width: 768px)": {
 *     "height": 8
 *   }
 *   "@media screen and (min-width: 768px)": {
 *     "height": 1
 *   },
 * }
 *
 * If multiple CSS properties need to be rendered responsively in the same CSS rule, this function
 * can be called multiple times but make sure to deep merge the CSS declaration objects returned from this function.
 *
 * * @example
 * const mediaQueryStyles = merge<BetterSystemStyleObject>(
    getBreakpointDeclarations(hidden, 'display', value => {
      return value ? 'none' : 'flex'
    }),
    getBreakpointDeclarations(
      {
        narrow: 'none',
        regular: 'line',
        wide: 'filled',
      },
      'backgroundColor',
      (value): string => {
        return {
          none: 'pink',
          line: 'salmon',
          filled: 'blue',
        }[value]
      },
    ),
  )
 */
export declare function getBreakpointDeclarations<TInput, TOutput>(value: TInput | ResponsiveValue<TInput>, cssProperty: keyof CSSProperties, mapFn: (value: TInput) => TOutput): BetterSystemStyleObject;
//# sourceMappingURL=getBreakpointDeclarations.d.ts.map