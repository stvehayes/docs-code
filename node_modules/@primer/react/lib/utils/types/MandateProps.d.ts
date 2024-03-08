export type MandateProps<T, K extends keyof T> = Omit<T, K> & {
    [MK in K]-?: NonNullable<T[MK]>;
};
//# sourceMappingURL=MandateProps.d.ts.map