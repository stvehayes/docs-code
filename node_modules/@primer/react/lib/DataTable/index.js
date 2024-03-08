'use strict';

var DataTable = require('./DataTable.js');
var ErrorDialog = require('./ErrorDialog.js');
var Table$1 = require('./Table.js');
var Pagination = require('./Pagination.js');

const Table = Object.assign(Table$1.Table, {
  Container: Table$1.TableContainer,
  Title: Table$1.TableTitle,
  Subtitle: Table$1.TableSubtitle,
  Actions: Table$1.TableActions,
  Divider: Table$1.TableDivider,
  Skeleton: Table$1.TableSkeleton,
  Head: Table$1.TableHead,
  Body: Table$1.TableBody,
  Header: Table$1.TableHeader,
  Row: Table$1.TableRow,
  Cell: Table$1.TableCell,
  CellPlaceholder: Table$1.TableCellPlaceholder,
  Pagination: Pagination.Pagination,
  ErrorDialog: ErrorDialog.ErrorDialog
});

exports.DataTable = DataTable.DataTable;
exports.Table = Table;
