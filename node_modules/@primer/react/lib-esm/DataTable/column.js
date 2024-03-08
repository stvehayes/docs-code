function createColumnHelper() {
  function column(column) {
    var _column$id;
    return {
      ...column,
      id: (_column$id = column.id) !== null && _column$id !== void 0 ? _column$id : column.field
    };
  }
  return {
    column
  };
}

export { createColumnHelper };
