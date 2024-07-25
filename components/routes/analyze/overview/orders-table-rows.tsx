import { PositionsAndOrdersType } from "@/lib/types";
import { TableCell, TableRow } from "@/components/ui/table";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function OrdersTableRows({
  orders,
}: {
  orders: PositionsAndOrdersType[];
}) {
  const totalPrice = orders.reduce((acc, curr) => acc + curr.nowPrice, 0);

  const totalSwap = orders.reduce((acc, curr) => acc + curr.swap, 0);

  const totalProfit = orders.reduce((acc, curr) => acc + curr.profit, 0);

  const totalReason = orders.reduce((acc, curr) => acc + curr.reason, 0);
  return (
    <>
      {orders.map(
        (
          {
            ticket,
            symbol,
            typeString,
            volume,
            openPrice,
            openTime,
            stopLoss,
            takeProfit,
            nowPrice,
            swap,
            profit,
            reason,
          },
          i
        ) => (
          <TableRow key={i}>
            <TableCell>{ticket}</TableCell>
            <TableCell>{symbol}</TableCell>
            <TableCell className="truncate">
              {openTime.split("T")[0]} {openTime.split("T")[1].split(".")[0]}
            </TableCell>
            <TableCell>{typeString}</TableCell>
            <TableCell>{volume}</TableCell>
            <TableCell>{openPrice}</TableCell>
            <TableCell>{stopLoss}</TableCell>
            <TableCell>{takeProfit}</TableCell>
            <TableCell>{nowPrice}</TableCell>
            <TableCell>{swap}</TableCell>
            <TableCell>
              {profit >= 0 ? (
                <span className="text-emerald-600 dark:text-emerald-400 flex gap-2 items-center">
                  {profit}
                  <TrendingUp className="w-3.5 h-3.w-3.5" />
                </span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400 flex gap-2 items-center">
                  {profit}
                  <TrendingDown className="w-3.5 h-3.w-3.5" />
                </span>
              )}
            </TableCell>
            <TableCell>{reason}</TableCell>
          </TableRow>
        )
      )}
      {orders.length && (
        <TableRow className="bg-muted/50 font-medium">
          <TableCell>Orders</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>{totalPrice}</TableCell>
          <TableCell>{totalSwap}</TableCell>
          <TableCell>
            {totalProfit >= 0 ? (
              <span className="text-emerald-600 dark:text-emerald-400 flex gap-2 items-center">
                {totalProfit}
                <TrendingUp className="w-3.5 h-3.w-3.5" />
              </span>
            ) : (
              <span className="text-rose-600 dark:text-rose-400 flex gap-2 items-center">
                {totalProfit}
                <TrendingDown className="w-3.5 h-3.w-3.5" />
              </span>
            )}
          </TableCell>
          <TableCell>{totalReason}</TableCell>
        </TableRow>
      )}
    </>
  );
}
