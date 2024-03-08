export { DataTable } from './DataTable.js';
import { ErrorDialog } from './ErrorDialog.js';
import { Table as Table$1, TableContainer, TableTitle, TableSubtitle, TableActions, TableDivider, TableSkeleton, TableHead, TableBody, TableHeader, TableRow, TableCell, TableCellPlaceholder } from './Table.js';
import { Pagination } from './Pagination.js';

const Table = Object.assign(Table$1, {
  Container: TableContainer,
  Title: TableTitle,
  Subtitle: TableSubtitle,
  Actions: TableActions,
  Divider: TableDivider,
  Skeleton: TableSkeleton,
  Head: TableHead,
  Body: TableBody,
  Header: TableHeader,
  Row: TableRow,
  Cell: TableCell,
  CellPlaceholder: TableCellPlaceholder,
  Pagination,
  ErrorDialog
});

export { Table };
