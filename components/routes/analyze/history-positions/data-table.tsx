"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border ">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="p-1.5">
                <Input
                  type="number"
                  value={table.getColumn("ticket")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("ticket")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="ml-auto">
                      {(table
                        .getColumn("symbol")
                        ?.getFilterValue() as string) || "all"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup
                      value={
                        (table
                          .getColumn("symbol")
                          ?.getFilterValue() as string) || "all"
                      }
                      onValueChange={(value) => {
                        if (value === "all") {
                          table.getColumn("symbol")?.setFilterValue(undefined);
                        } else {
                          table.getColumn("symbol")?.setFilterValue(value);
                        }
                      }}
                    >
                      {["all", "XAUEUR", "XAUUSD", "GBPUSD", "EURUSD"].map(
                        (item) => (
                          <DropdownMenuRadioItem key={item} value={item}>
                            {item}
                          </DropdownMenuRadioItem>
                        )
                      )}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="py-1.5"></TableCell>
              <TableCell className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="ml-auto">
                      {(table.getColumn("type")?.getFilterValue() as string) ||
                        "all"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup
                      value={
                        (table.getColumn("type")?.getFilterValue() as string) ||
                        "all"
                      }
                      onValueChange={(value) => {
                        if (value === "all") {
                          table.getColumn("type")?.setFilterValue(undefined);
                        } else {
                          table.getColumn("type")?.setFilterValue(value);
                        }
                      }}
                    >
                      {["all", "buy", "sell"].map((item) => (
                        <DropdownMenuRadioItem key={item} value={item}>
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={table.getColumn("volume")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("volume")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={
                    table.getColumn("nowPrice")?.getFilterValue() as string
                  }
                  onChange={(event) =>
                    table
                      .getColumn("nowPrice")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5"></TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={
                    table
                      .getColumn("positionDuration")
                      ?.getFilterValue() as string
                  }
                  onChange={(event) =>
                    table
                      .getColumn("positionDuration")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={
                    table.getColumn("commission")?.getFilterValue() as string
                  }
                  onChange={(event) =>
                    table
                      .getColumn("commission")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={table.getColumn("swap")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("swap")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={table.getColumn("profit")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("profit")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="ml-auto">
                      {(table
                        .getColumn("reason")
                        ?.getFilterValue() as string) || "all"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup
                      value={
                        (table
                          .getColumn("reason")
                          ?.getFilterValue() as string) || "all"
                      }
                      onValueChange={(value) => {
                        if (value === "all") {
                          table.getColumn("reason")?.setFilterValue(undefined);
                        } else {
                          table.getColumn("reason")?.setFilterValue(value);
                        }
                      }}
                    >
                      {["all", "CLIENT", "DEALER"].map((item) => (
                        <DropdownMenuRadioItem key={item} value={item}>
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-10 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-x-2 flex items-center">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
