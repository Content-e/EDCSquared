import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface Props<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  onRowClick?: (row: T) => void;
  title: string;
}

function Table<T>({ data, columns, title, onRowClick }: Props<T>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h1 className="text-primary font-bold mb-4">{title}</h1>
      <table className="w-full whitespace-nowrap text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-2 px-2 overflow-hidden text-ellipsis text-secondary"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              onClick={() => onRowClick && onRowClick(row.original)}
              className={`hover:bg-gray-200/50 cursor-pointer ${
                rowIndex % 2 ? "bg-gray-200/20" : ""
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    maxWidth: cell.column.getSize(),
                  }}
                  className="py-3 px-2 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
