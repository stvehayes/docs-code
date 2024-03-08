'use strict';

var React = require('react');
var sorting = require('./sorting.js');

function useTable({
  columns,
  data,
  initialSortColumn,
  initialSortDirection
}) {
  const [rowOrder, setRowOrder] = React.useState(data);
  const [prevData, setPrevData] = React.useState(data);
  const [prevColumns, setPrevColumns] = React.useState(columns);
  const [sortByColumn, setSortByColumn] = React.useState(() => {
    return getInitialSortState(columns, initialSortColumn, initialSortDirection);
  });
  const {
    gridTemplateColumns
  } = useTableLayout(columns);

  // Reset the `sortByColumn` state if the columns change and that column is no
  // longer provided
  if (columns !== prevColumns) {
    setPrevColumns(columns);
    if (sortByColumn) {
      const column = columns.find(column => {
        var _column$id;
        const id = (_column$id = column.id) !== null && _column$id !== void 0 ? _column$id : column.field;
        return sortByColumn.id === id;
      });
      if (!column) {
        setSortByColumn(null);
      }
    }
  }
  const headers = columns.map(column => {
    var _column$id2;
    const id = (_column$id2 = column.id) !== null && _column$id2 !== void 0 ? _column$id2 : column.field;
    if (id === undefined) {
      throw new Error(`Expected either an \`id\` or \`field\` to be defined for a Column`);
    }
    const sortable = column.sortBy !== undefined && column.sortBy !== false;
    return {
      id,
      column,
      isSortable() {
        return sortable;
      },
      getSortDirection() {
        if (sortByColumn && sortByColumn.id === id) {
          return sortByColumn.direction;
        }
        return sorting.SortDirection.NONE;
      }
    };
  });

  // Update the row order and apply the current sort column to the incoming data
  if (data !== prevData) {
    setPrevData(data);
    setRowOrder(data);
    if (sortByColumn) {
      sortRows(sortByColumn);
    }
  }

  /**
   * Sort the input row data by the given header
   */
  function sortBy(header) {
    const sortState = {
      id: header.id,
      direction: sortByColumn && sortByColumn.id === header.id ? sorting.transition(sortByColumn.direction) : sorting.DEFAULT_SORT_DIRECTION
    };
    setSortByColumn(sortState);
    sortRows(sortState);
  }

  /**
   * Sort the rows of a table with the given column sort state. If the data in the table is sparse,
   * blank values will be ordered last regardless of the sort direction.
   */
  function sortRows(state) {
    const header = headers.find(header => {
      return header.id === state.id;
    });
    if (!header) {
      throw new Error(`Unable to find header with id: ${state.id}`);
    }
    if (header.column.sortBy === false || header.column.sortBy === undefined) {
      throw new Error(`The column for this header is not sortable`);
    }
    const sortMethod = header.column.sortBy === true ? sorting.strategies.basic : typeof header.column.sortBy === 'string' ? sorting.strategies[header.column.sortBy] : header.column.sortBy;
    setRowOrder(rowOrder => {
      return rowOrder.slice().sort((a, b) => {
        if (header.column.field === undefined) {
          return 0;
        }

        // Custom sort functions operate on the row versus the field
        if (typeof header.column.sortBy === 'function') {
          if (state.direction === sorting.SortDirection.ASC) {
            // @ts-ignore todo
            return sortMethod(a, b);
          }
          // @ts-ignore todo
          return sortMethod(b, a);
        }
        const valueA = get(a, header.column.field);
        const valueB = get(b, header.column.field);
        if (valueA && valueB) {
          if (state.direction === sorting.SortDirection.ASC) {
            // @ts-ignore todo
            return sortMethod(valueA, valueB);
          }
          // @ts-ignore todo
          return sortMethod(valueB, valueA);
        }
        if (valueA) {
          return -1;
        }
        if (valueB) {
          return 1;
        }
        return 0;
      });
    });
  }
  return {
    headers,
    rows: rowOrder.map(row => {
      return {
        id: `${row.id}`,
        getValue() {
          return row;
        },
        getCells() {
          return headers.map(header => {
            var _header$column$rowHea;
            return {
              id: `${row.id}:${header.id}`,
              column: header.column,
              rowHeader: (_header$column$rowHea = header.column.rowHeader) !== null && _header$column$rowHea !== void 0 ? _header$column$rowHea : false,
              getValue() {
                if (header.column.field !== undefined) {
                  return get(row, header.column.field);
                }
                throw new Error(`Unable to get value for column header ${header.id}`);
              }
            };
          });
        }
      };
    }),
    actions: {
      sortBy
    },
    gridTemplateColumns
  };
}
function getInitialSortState(columns, initialSortColumn, initialSortDirection) {
  if (initialSortColumn !== undefined) {
    const column = columns.find(column => {
      return column.id === initialSortColumn || column.field === initialSortColumn;
    });
    if (column === undefined) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(`Warning: Unable to find a column with id or field set to: ${initialSortColumn}. Please provide a value to \`initialSortColumn\` which corresponds to a \`id\` or \`field\` value in a column.`);
      }
      return null;
    }
    if (column.sortBy === false || column.sortBy === undefined) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(`Warning: The column specified by initialSortColumn={${initialSortColumn}} is not sortable. Please set \`sortBy\` to true or provide a sort strategy.`);
      }
      return null;
    }
    return {
      id: `${initialSortColumn}`,
      direction: initialSortDirection !== null && initialSortDirection !== void 0 ? initialSortDirection : sorting.DEFAULT_SORT_DIRECTION
    };
  }
  if (initialSortDirection !== undefined) {
    var _column$id3;
    const column = columns.find(column => {
      return column.sortBy !== false && column.sortBy !== undefined;
    });
    if (!column) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(`Warning: An initialSortDirection value was provided but no columns are sortable. Please set \`sortBy\` to true or provide a sort strategy to a column.`);
      }
      return null;
    }
    const id = (_column$id3 = column.id) !== null && _column$id3 !== void 0 ? _column$id3 : column.field;
    if (id === undefined) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(`Warning: Unable to find an \`id\` or \`field\` for the column: ${column}. Please set one of these properties on the column.`);
      }
      return null;
    }
    return {
      id,
      direction: initialSortDirection
    };
  }
  return null;
}
function useTableLayout(columns) {
  return {
    gridTemplateColumns: getGridTemplateFromColumns(columns).join(' ')
  };
}
function getGridTemplateFromColumns(columns) {
  return columns.map(column => {
    var _column$width;
    const columnWidth = (_column$width = column.width) !== null && _column$width !== void 0 ? _column$width : 'grow';
    let minWidth = 'auto';
    let maxWidth = '1fr';
    if (columnWidth === 'auto') {
      maxWidth = 'auto';
    }

    // Setting a min-width of 'max-content' ensures that the column will grow to fit the widest cell's content.
    // However, If the column has a max width, we can't set the min width to `max-content` because
    // the widest cell's content might overflow the container.
    if (columnWidth === 'grow' && !column.maxWidth) {
      minWidth = 'max-content';
    }

    // Column widths set to "growCollapse" don't need a min width unless one is explicitly provided.
    if (columnWidth === 'growCollapse') {
      minWidth = '0';
    }

    // If a consumer passes `minWidth` or `maxWidth`, we need to override whatever we set above.
    if (column.minWidth) {
      minWidth = typeof column.minWidth === 'number' ? `${column.minWidth}px` : column.minWidth;
    }
    if (column.maxWidth) {
      maxWidth = typeof column.maxWidth === 'number' ? `${column.maxWidth}px` : column.maxWidth;
    }

    // If a consumer is passing one of the shorthand widths or doesn't pass a width at all, we use the
    // min and max width calculated above to create a minmax() column template value.
    if (typeof columnWidth !== 'number' && ['grow', 'growCollapse', 'auto'].includes(columnWidth)) {
      return minWidth === maxWidth ? minWidth : `minmax(${minWidth}, ${maxWidth})`;
    }

    // If we reach this point, the consumer is passing an explicit width value.
    return typeof columnWidth === 'number' ? `${columnWidth}px` : columnWidth;
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function get(object, path) {
  return path.split('.').reduce((value, key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return value[key];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, object);
}

exports.getGridTemplateFromColumns = getGridTemplateFromColumns;
exports.useTable = useTable;
exports.useTableLayout = useTableLayout;
