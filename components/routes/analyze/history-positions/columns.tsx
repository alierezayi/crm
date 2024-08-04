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
    filterFn: "includesString",
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
    cell: ({ row }) => {
      const date = new Date(row.getValue("openTime"));
      return <div className="">{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "volume",
    header: "Volume",
    filterFn: "includesString",
    // meta: {
    //   filterVariant: "",
    // },
  },
  {
    accessorKey: "nowPrice",
    header: "Price",
    filterFn: "includesString",
  },
  {
    accessorKey: "closeTime",
    header: "Time Close",
    cell: ({ row }) => {
      const date = new Date(row.getValue("closeTime"));
      return <div className="">{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "positionDuration",
    header: "Duration",
    filterFn: "includesString",
    cell: ({ row }) => {
      const duration: string = row.getValue("positionDuration");
      const timeString = duration.split(".")[0];
      const parts = timeString.split(":");

      if (parts.length !== 3) return;

      const [hrs, mins, secs] = parts.map((part) => parseInt(part, 10));

      return (
        <div>
          {!!hrs && `${hrs}h ,`} {!!mins && `${mins}m ,`} {!!secs && `${secs}s`}
        </div>
      );
    },
  },
  {
    accessorKey: "commission",
    header: "Commission",
    filterFn: "includesString",
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
    filterFn: "includesString",
  },
  {
    accessorKey: "profit",
    filterFn: "includesString",
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
