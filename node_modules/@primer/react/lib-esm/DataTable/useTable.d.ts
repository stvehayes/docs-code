/// <reference types="react" />
import type { Column } from './column';
import type { UniqueRow } from './row';
import { SortDirection } from './sorting';
interface TableConfig<Data extends UniqueRow> {
    columns: Array<Column<Data>>;
    data: Array<Data>;
    initialSortColumn?: string | number;
    initialSortDirection?: Exclude<SortDirection, 'NONE'>;
}
interface Table<Data extends UniqueRow> {
    headers: Array<Header<Data>>;
    rows: Array<Row<Data>>;
    actions: {
        sortBy: (header: Header<Data>) => void;
    };
    gridTemplateColumns: React.CSSProperties['gridTemplateColumns'];
}
interface Header<Data extends UniqueRow> {
    id: string;
    column: Column<Data>;
    isSortable: () => boolean;
    getSortDirection: () => SortDirection | Exclude<SortDirection, 'NONE'>;
}
interface Row<Data extends UniqueRow> {
    id: string | number;
    getCells: () => Array<Cell<Data>>;
    getValue: () => Data;
}
interface Cell<Data extends UniqueRow> {
    id: string;
    column: Column<Data>;
    getValue: () => Data[keyof Data];
    rowHeader: boolean;
}
export declare function useTable<Data extends UniqueRow>({ columns, data, initialSortColumn, initialSortDirection, }: TableConfig<Data>): Table<Data>;
export declare function useTableLayout<Data extends UniqueRow>(columns: Array<Column<Data>>): {
    gridTemplateColumns: string;
};
export declare function getGridTemplateFromColumns<Data extends UniqueRow>(columns: Array<Column<Data>>): string[];
export {};
//# sourceMappingURL=useTable.d.ts.map