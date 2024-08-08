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
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  FilterFn,
  Row,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
import { ChevronLeft, ChevronRight, Filter, FilterIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

type FilterInputsType = {
  ticket: string;
  symbol: string;
  openTime: string;
  type: string;
  volume: {
    min: string;
    max: string;
  };
  nowPrice: {
    min: string;
    max: string;
  };
  closeTime: string;
  positionDuration: {
    min: string;
    max: string;
  };
  commission: {
    min: string;
    max: string;
  };
  swap: {
    min: string;
    max: string;
  };
  profit: {
    min: string;
    max: string;
  };
  reason: string;
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [filterInputs, setFilterInputs] = useState<FilterInputsType>({
    ticket: "",
    symbol: "",
    openTime: "",
    type: "",
    volume: {
      min: "",
      max: "",
    },
    nowPrice: {
      min: "",
      max: "",
    },
    closeTime: "",
    positionDuration: {
      min: "",
      max: "",
    },
    commission: {
      min: "",
      max: "",
    },
    swap: {
      min: "",
      max: "",
    },
    profit: {
      min: "",
      max: "",
    },
    reason: "",
  });

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
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    filterFns: {},
  });

  const handleClearFilterInputs = () =>
    setFilterInputs({
      ticket: "",
      symbol: "",
      openTime: "",
      type: "",
      volume: {
        min: "",
        max: "",
      },
      nowPrice: {
        min: "",
        max: "",
      },
      closeTime: "",
      positionDuration: {
        min: "",
        max: "",
      },
      commission: {
        min: "",
        max: "",
      },
      swap: {
        min: "",
        max: "",
      },
      profit: {
        min: "",
        max: "",
      },
      reason: "",
    });

  const handleFiltering = () => {
    const visibleColumns = table.getVisibleFlatColumns();

    visibleColumns.forEach((column) => {
      const columnId = column.id;
      const canFilter = column.getCanFilter();

      switch (columnId) {
        case "ticket":
        case "symbol":
        case "type":
        case "reason":
          if (canFilter) {
            column.setFilterValue(filterInputs[columnId]);
          }
          break;

        case "openTime":
        case "closeTime":
          // develop soon
          break;

        case "volume":
        case "nowPrice":
        case "positionDuration":
        case "commission":
        case "swap":
        case "profit":
          // if (canFilter) {
          //   const filterValue = filterInputs[columnId];
          //   const minValue = filterValue.min;
          //   const maxValue = filterValue.max;
          //   column.setFilterValue([minValue, maxValue]);
          // }
          break;

        default:
          break;
      }
    });

    // if (column.getCanFilter()) {
    //   const minValue = filterInputs[column.id].min;
    //   const maxValue = filterInputs[column.id].max;

    //   column.setFilterValue([minValue, maxValue]);
    // }

    // table.getColumn("ticket")?.setFilterValue(filterInputs.ticket);
    // table.getColumn("symbol")?.setFilterValue(filterInputs.symbol);
    // table.getColumn("openTime")?.setFilterValue(filterInputs.openTime);
    // table.getColumn("type")?.setFilterValue(filterInputs.type);
    // table
    //   .getColumn("volume")
    //   ?.setFilterValue([filterInputs.volume.min, filterInputs.volume.max]);
    // table
    //   .getColumn("nowPrice")
    //   ?.setFilterValue([filterInputs.nowPrice.min, filterInputs.nowPrice.max]);
    // table.getColumn("closeTime")?.setFilterValue(filterInputs.closeTime);
    // table
    //   .getColumn("positionDuration")
    //   ?.setFilterValue([filterInputs.positionDuration.min, filterInputs.positionDuration.max]);
    // table
    //   .getColumn("commission")
    //   ?.setFilterValue([
    //     filterInputs.commission.min,
    //     filterInputs.commission.max,
    //   ]);
    // table
    //   .getColumn("swap")
    //   ?.setFilterValue([filterInputs.swap.min, filterInputs.swap.max]);
    // table
    //   .getColumn("profit")
    //   ?.setFilterValue([filterInputs.profit.min, filterInputs.profit.max]);
    // table.getColumn("reason")?.setFilterValue(filterInputs.reason);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center py-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <FilterIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>Filter Columns</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                magni perspiciatis quam cumque.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={handleFiltering}
              className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5"
            >
              {/* ticket */}
              <div>
                <Label htmlFor="ticket">Ticket</Label>
                <Input
                  id="ticket"
                  type="number"
                  placeholder="Ex: 353*****"
                  value={filterInputs.ticket}
                  onChange={(e) =>
                    setFilterInputs((prev) => ({
                      ...prev,
                      ticket: e.target.value,
                    }))
                  }
                />
              </div>
              {/* symbol */}
              <div>
                <Label htmlFor="symbol">Symbol</Label>
                <Input
                  id="symbol"
                  placeholder="Ex: XAUUSD"
                  value={filterInputs.symbol}
                  onChange={(e) =>
                    setFilterInputs((prev) => ({
                      ...prev,
                      symbol: e.target.value,
                    }))
                  }
                />
              </div>
              {/* time */}
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  placeholder="MM/DD/YYYY"
                  className="border-none bg-primary/5"
                  value={filterInputs.openTime}
                  onChange={(e) =>
                    setFilterInputs((prev) => ({
                      ...prev,
                      openTime: e.target.value,
                    }))
                  }
                />
              </div>
              {/* type */}
              <div>
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  placeholder="Ex: Sell, Buy"
                  value={filterInputs.type}
                  onChange={(e) =>
                    setFilterInputs((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                />
              </div>
              {/* volume */}
              <div>
                <Label htmlFor="volume">Volume</Label>
                <div className="flex gap-2">
                  <Input
                    id="volume"
                    placeholder="min"
                    value={filterInputs.volume.min}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        volume: {
                          ...prev.volume,
                          min: e.target.value,
                        },
                      }))
                    }
                  />
                  <Input
                    placeholder="max"
                    value={filterInputs.volume.max}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        volume: {
                          ...prev.volume,
                          max: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* price */}
              <div>
                <Label htmlFor="price">price</Label>
                <div className="flex gap-2">
                  <Input
                    id="price"
                    placeholder="min"
                    value={filterInputs.nowPrice.min}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        nowPrice: {
                          ...prev.nowPrice,
                          min: e.target.value,
                        },
                      }))
                    }
                  />
                  <Input
                    placeholder="max"
                    value={filterInputs.nowPrice.max}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        nowPrice: {
                          ...prev.nowPrice,
                          max: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* time close */}
              <div>
                <Label htmlFor="timeClose">Time close</Label>
                <Input
                  id="timeClose"
                  placeholder="MM/DD/YYYY"
                  className="border-none bg-primary/5"
                  value={filterInputs.closeTime}
                  onChange={(e) =>
                    setFilterInputs((prev) => ({
                      ...prev,
                      closeTime: e.target.value,
                    }))
                  }
                />
              </div>
              {/* positionDuration */}
              <div>
                <Label htmlFor="positionDuration">Duration</Label>
                <div className="flex gap-2">
                  <Input
                    id="positionDuration"
                    placeholder="Ex: 1m, 2s"
                    value={filterInputs.positionDuration.min}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        positionDuration: {
                          ...prev.positionDuration,
                          min: e.target.value,
                        },
                      }))
                    }
                  />
                  <Input
                    placeholder="Ex: 4m, 29s"
                    value={filterInputs.positionDuration.max}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        positionDuration: {
                          ...prev.positionDuration,
                          max: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* commission */}
              <div>
                <Label htmlFor="commission">Comission</Label>
                <div className="flex gap-2">
                  <Input
                    id="commission"
                    placeholder="min"
                    value={filterInputs.commission.min}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        commission: {
                          ...prev.commission,
                          min: e.target.value,
                        },
                      }))
                    }
                  />
                  <Input
                    placeholder="max"
                    value={filterInputs.commission.max}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        commission: {
                          ...prev.commission,
                          max: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* swap */}
              <div>
                <Label htmlFor="swap">Swap</Label>
                <div className="flex gap-2">
                  <Input
                    id="swap"
                    placeholder="min"
                    value={filterInputs.swap.min}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        swap: {
                          ...prev.swap,
                          min: e.target.value,
                        },
                      }))
                    }
                  />
                  <Input
                    placeholder="max"
                    value={filterInputs.swap.max}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        swap: {
                          ...prev.swap,
                          max: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* profit */}
              <div>
                <Label htmlFor="profit">Profit</Label>
                <div className="flex gap-2">
                  <Input
                    id="profit"
                    placeholder="min"
                    value={filterInputs.profit.min}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        profit: {
                          ...prev.profit,
                          min: e.target.value,
                        },
                      }))
                    }
                  />
                  <Input
                    placeholder="max"
                    value={filterInputs.profit.max}
                    onChange={(e) =>
                      setFilterInputs((prev) => ({
                        ...prev,
                        profit: {
                          ...prev.profit,
                          max: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* reason */}
              <div>
                <Label htmlFor="reason">Reason</Label>
                <Input
                  id="reason"
                  placeholder="Ex: CLIENT, DEALER"
                  value={filterInputs.reason}
                  onChange={(e) =>
                    setFilterInputs((prev) => ({
                      ...prev,
                      reason: e.target.value,
                    }))
                  }
                />
              </div>
            </form>
            <DialogFooter>
              <Button variant="outline" onClick={handleClearFilterInputs}>
                Clear
              </Button>
              <DialogClose asChild>
                <Button onClick={handleFiltering} type="submit">
                  Apply
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
            {/* {isShowFilterOptions && (
              <TableRow>
                {table.getVisibleFlatColumns().map((column) => {
                  if (column.id === "openTime" || column.id === "closeTime") {
                    return (
                      <TableCell key={column.id}>
                        {column.getCanFilter() ? (
                          <Input
                            value={(column.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                              column.setFilterValue(event.target.value)
                            }
                            className="w-full"
                          />
                        ) : null}
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={column.id}>
                      {column.getCanFilter() ? (
                        <Input
                          value={(column.getFilterValue() as string) ?? ""}
                          onChange={(event) =>
                            column.setFilterValue(event.target.value)
                          }
                          className="w-full"
                        />
                      ) : null}
                    </TableCell>
                  );
                })}
              </TableRow>
            )} */}
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
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
