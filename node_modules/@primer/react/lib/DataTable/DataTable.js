'use strict';

var React = require('react');
var useTable = require('./useTable.js');
var Table = require('./Table.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// ----------------------------------------------------------------------------
// DataTable
// ----------------------------------------------------------------------------

function DataTable({
  'aria-labelledby': labelledby,
  'aria-describedby': describedby,
  cellPadding,
  columns,
  data,
  initialSortColumn,
  initialSortDirection
}) {
  const {
    headers,
    rows,
    actions,
    gridTemplateColumns
  } = useTable.useTable({
    data,
    columns,
    initialSortColumn,
    initialSortDirection
  });
  return /*#__PURE__*/React__default.default.createElement(Table.Table, {
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    cellPadding: cellPadding,
    gridTemplateColumns: gridTemplateColumns
  }, /*#__PURE__*/React__default.default.createElement(Table.TableHead, null, /*#__PURE__*/React__default.default.createElement(Table.TableRow, null, headers.map(header => {
    if (header.isSortable()) {
      return /*#__PURE__*/React__default.default.createElement(Table.TableSortHeader, {
        key: header.id,
        align: header.column.align,
        direction: header.getSortDirection(),
        onToggleSort: () => {
          actions.sortBy(header);
        }
      }, typeof header.column.header === 'string' ? header.column.header : header.column.header());
    }
    return /*#__PURE__*/React__default.default.createElement(Table.TableHeader, {
      key: header.id,
      align: header.column.align
    }, typeof header.column.header === 'string' ? header.column.header : header.column.header());
  }))), /*#__PURE__*/React__default.default.createElement(Table.TableBody, null, rows.map(row => {
    return /*#__PURE__*/React__default.default.createElement(Table.TableRow, {
      key: row.id
    }, row.getCells().map(cell => {
      return /*#__PURE__*/React__default.default.createElement(Table.TableCell, {
        key: cell.id,
        scope: cell.rowHeader ? 'row' : undefined,
        align: cell.column.align
      }, cell.column.renderCell ? cell.column.renderCell(row.getValue()) : cell.getValue());
    }));
  })));
}
DataTable.displayName = "DataTable";

exports.DataTable = DataTable;
