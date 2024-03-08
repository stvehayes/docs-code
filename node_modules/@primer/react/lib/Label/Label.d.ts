import type { BetterSystemStyleObject, SxProp } from '../sx';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export type LabelProps = {
    /** The color of the label */
    variant?: LabelColorOptions;
    /** How large the label is rendered */
    size?: LabelSizeKeys;
} & SxProp;
export type LabelColorOptions = 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'attention' | 'severe' | 'danger' | 'done' | 'sponsors';
type LabelSizeKeys = 'small' | 'large';
export declare const variants: Record<LabelColorOptions, BetterSystemStyleObject>;
declare const Label: PolymorphicForwardRefComponent<"span", LabelProps>;
export default Label;
//# sourceMappingURL=Label.d.ts.map