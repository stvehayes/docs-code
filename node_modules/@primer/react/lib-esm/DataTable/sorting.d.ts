export type SortDirection = 'ASC' | 'DESC' | 'NONE';
export declare const SortDirection: {
    [Key in SortDirection]: `${Key}`;
};
export declare const DEFAULT_SORT_DIRECTION: "ASC";
export declare function transition(direction: Exclude<SortDirection, 'NONE'>): Exclude<SortDirection, 'NONE'>;
/**
 * A sort strategy for comparing any two values
 */
export declare function basic<T>(a: T, b: T): 1 | 0 | -1;
/**
 * A sort strategy for comparing two `Date` values. Also includes support for
 * values from `Date.now()`
 */
export declare function datetime(a: Date | number, b: Date | number): number;
/**
 * Compare two numbers using alphanumeric, or natural order, sorting. This
 * sorting function breaks up the inputs into groups of text and numbers and
 * compares the different sub-groups of each to determine the order of a set of
 * strings
 *
 * @see https://en.wikipedia.org/wiki/Natural_sort_order
 */
export declare function alphanumeric(inputA: string, inputB: string): number;
export declare const strategies: {
    alphanumeric: typeof alphanumeric;
    basic: typeof basic;
    datetime: typeof datetime;
};
export type SortStrategy = keyof typeof strategies;
export type CustomSortStrategy<T> = (a: T, b: T) => number;
//# sourceMappingURL=sorting.d.ts.map