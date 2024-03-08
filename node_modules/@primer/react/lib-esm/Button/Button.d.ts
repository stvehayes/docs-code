import type { ButtonProps } from './types';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import type { BetterSystemStyleObject } from '../sx';
declare const ButtonComponent: PolymorphicForwardRefComponent<"button", ButtonProps>;
export declare function generateCustomSxProp(props: Partial<Pick<ButtonProps, 'size' | 'block' | 'leadingVisual' | 'trailingVisual' | 'trailingAction'>>, providedSx: BetterSystemStyleObject): {
    [key: string]: BetterSystemStyleObject;
};
export { ButtonComponent };
//# sourceMappingURL=Button.d.ts.map