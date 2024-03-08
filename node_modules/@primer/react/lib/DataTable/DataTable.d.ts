import React from 'react';
import type { Column } from './column';
import type { SortDirection } from './sorting';
import type { UniqueRow } from './row';
import type { ObjectPaths } from './utils';
export type DataTableProps<Data extends UniqueRow> = {
    /**
     * Provide an id to an element which uniquely describes this table
     */
    'aria-describedby'?: string;
    /**
     * Provide an id to an element which uniquely labels this table
     */
    'aria-labelledby'?: string;
    /**
     * Specify the amount of space that should be available around the contents of
     * a cell
     */
    cellPadding?: 'condensed' | 'normal' | 'spacious';
    /**
     * Provide a collection of the rows which will be rendered inside of the table
     */
    data: Array<Data>;
    /**
     * Provide the columns for the table and the fields in `data` to which they
     * correspond
     */
    columns: Array<Column<Data>>;
    /**
     * Provide the id or field of the column by which the table is sorted. When
     * using this `prop`, the input data must be sorted by this column in
     * ascending order
     */
    initialSortColumn?: ObjectPaths<Data> | string | number;
    /**
     * Provide the sort direction that the table should be sorted by on the
     * currently sorted column
     */
    initialSortDirection?: Exclude<SortDirection, 'NONE'>;
};
declare function DataTable<Data extends UniqueRow>({ 'aria-labelledby': labelledby, 'aria-describedby': describedby, cellPadding, columns, data, initialSortColumn, initialSortDirection, }: DataTableProps<Data>): React.JSX.Element;
export { DataTable };
//# sourceMappingURL=DataTable.d.ts.map