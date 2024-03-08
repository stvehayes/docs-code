import type { LinkButtonProps } from './types';
import type { ButtonBaseProps } from './ButtonBase';
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type MyProps = LinkButtonProps & ButtonBaseProps;
declare const LinkButton: PolymorphicForwardRefComponent<"a", MyProps>;
export { LinkButton };
//# sourceMappingURL=LinkButton.d.ts.map