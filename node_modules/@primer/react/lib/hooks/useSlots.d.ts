import React from 'react';
type ComponentMatcher = React.ElementType<Props>;
type ComponentAndPropsMatcher = [ComponentMatcher, (props: Props) => boolean];
export type SlotConfig = Record<string, ComponentMatcher | ComponentAndPropsMatcher>;
type Props = any;
type SlotElements<Config extends SlotConfig> = {
    [Property in keyof Config]: SlotValue<Config, Property>;
};
type SlotValue<Config, Property extends keyof Config> = Config[Property] extends React.ElementType ? React.ReactElement<React.ComponentPropsWithoutRef<Config[Property]>, Config[Property]> : Config[Property] extends readonly [
    infer ElementType extends React.ElementType,
    infer _testFn
] ? React.ReactElement<React.ComponentPropsWithoutRef<ElementType>, ElementType> : never;
/**
 * Extract components from `children` so we can render them in different places,
 * allowing us to implement components with SSR-compatible slot APIs.
 * Note: We can only extract direct children, not nested ones.
 */
export declare function useSlots<Config extends SlotConfig>(children: React.ReactNode, config: Config): [Partial<SlotElements<Config>>, React.ReactNode[]];
export {};
//# sourceMappingURL=useSlots.d.ts.map