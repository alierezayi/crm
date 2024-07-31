"use client";

import { Button } from "@/components/ui/button";
import { HistoryPosition } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<HistoryPosition>[] = [
  {
    accessorKey: "ticket",
    header: "Ticket",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "openTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "volume",
    header: "Volume",
  },
  {
    accessorKey: "nowPrice",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("nowPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "closeTime",
    header: "Time Close",
  },
  {
    accessorKey: "commission",
    header: "Commission",
    cell: ({ row }) => {
      const commission = parseFloat(row.getValue("commission"));

      return (
        <div
          className={cn(
            commission > 0 && "text-green-600 dark:text-green-400",
            commission < 0 && "text-rose-600 dark:text-rose-400",
            commission === 0 && "text-blue-600 dark:text-blue-400"
          )}
        >
          {commission}
        </div>
      );
    },
  },
  {
    accessorKey: "swap",
    header: "Swap",
  },
  {
    accessorKey: "profit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Profit
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const profit = parseFloat(row.getValue("profit"));

      return (
        <div
          className={cn(
            profit > 0 && "text-green-600 dark:text-green-400",
            profit < 0 && "text-rose-600 dark:text-rose-400",
            profit === 0 && "text-blue-600 dark:text-blue-400"
          )}
        >
          {profit}
        </div>
      );
    },
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
];
