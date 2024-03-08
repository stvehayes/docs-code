type ArrayOfLength<Length extends number, SizedArray extends Array<unknown> = []> = SizedArray['length'] extends Length ? SizedArray : ArrayOfLength<Length, [...SizedArray, SizedArray['length']]>;
type MaxLength = ArrayOfLength<10>[number];
type ArrayIndex<A extends ReadonlyArray<any>, Keys extends number = never> = A extends readonly [] ? Keys : A extends readonly [infer _, ...infer Tail] ? ArrayIndex<Tail, Keys | Tail['length']> : Keys;
type ArrayWithinBounds<T> = T extends ReadonlyArray<any> & {
    length: infer Length;
} ? Length extends MaxLength ? T : never : never;
export type ObjectPaths<T> = T extends readonly any[] & ArrayWithinBounds<T> ? `${ArrayIndex<T>}` | PrefixPath<T, ArrayIndex<T>> : T extends any[] ? never & 'Unable to determine keys of potentially boundless array' : T extends Date ? never : T extends object ? Extract<keyof T, string | number> | PrefixPath<T, Extract<keyof T, string | number>> : never;
type PrefixPath<T, Prefix> = Prefix extends Extract<keyof T, number | string> ? `${Prefix}.${ObjectPaths<T[Prefix]>}` : never;
export type ObjectPathValue<ObjectType extends object, Path extends string | number> = ObjectType extends Record<string | number, any> ? Path extends `${infer Key}.${infer NestedPath}` ? ObjectPathValue<ObjectType[Key], NestedPath> : ObjectType[Path] : never;
export {};
//# sourceMappingURL=utils.d.ts.map