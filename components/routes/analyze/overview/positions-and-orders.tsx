import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PositionsAndOrdersType } from "@/lib/types";
import { LayoutList, TrendingDown, TrendingUp } from "lucide-react";

export default function PositionsAndOrders({
  positions = [],
  orders = [],
}: {
  positions: PositionsAndOrdersType[];
  orders: PositionsAndOrdersType[];
}) {
  const totalPrice = {
    positions: positions.reduce((acc, curr) => acc + curr.nowPrice, 0),
    orders: orders.reduce((acc, curr) => acc + curr.nowPrice, 0),
  };

  const totalSwap = {
    positions: positions.reduce((acc, curr) => acc + curr.swap, 0),
    orders: orders.reduce((acc, curr) => acc + curr.swap, 0),
  };

  const totalProfit = {
    positions: positions.reduce((acc, curr) => acc + curr.profit, 0),
    orders: orders.reduce((acc, curr) => acc + curr.profit, 0),
  };

  const totalReason = {
    positions: positions.reduce((acc, curr) => acc + curr.reason, 0),
    orders: orders.reduce((acc, curr) => acc + curr.reason, 0),
  };

  return (
    <Card className="md: lg:col-span-4 xl:col-span-2 2xl:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LayoutList className="w-4" />
          Positions & Orders
        </CardTitle>

        <CardDescription>Archive positions and orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="max-h-[466.6px]">
          <TableHeader>
            <TableRow>
              <TableHead>Ticket</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>OpenPrice</TableHead>
              <TableHead>S/L</TableHead>
              <TableHead>T/P</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Swap</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.length < 0 && (
              <div className="w-full flex justify-center">No item exist.</div>
            )}
            {positions.map(
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
                    {openTime.split("T")[0]}{" "}
                    {openTime.split("T")[1].split(".")[0]}
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
            {positions.length && (
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>Positions</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{totalPrice.positions}</TableCell>
                <TableCell>{totalSwap.positions}</TableCell>
                <TableCell>
                  {totalProfit.positions >= 0 ? (
                    <span className="text-emerald-600 dark:text-emerald-400 flex gap-2 items-center">
                      {totalProfit.positions}
                      <TrendingUp className="w-3.5 h-3.w-3.5" />
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 flex gap-2 items-center">
                      {totalProfit.positions}
                      <TrendingDown className="w-3.5 h-3.w-3.5" />
                    </span>
                  )}
                </TableCell>
                <TableCell>{totalReason.positions}</TableCell>
              </TableRow>
            )}
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
                    {openTime.split("T")[0]}{" "}
                    {openTime.split("T")[1].split(".")[0]}
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
                <TableCell>{totalPrice.orders}</TableCell>
                <TableCell>{totalSwap.orders}</TableCell>
                <TableCell>
                  {totalProfit.orders >= 0 ? (
                    <span className="text-emerald-600 dark:text-emerald-400 flex gap-2 items-center">
                      {totalProfit.orders}
                      <TrendingUp className="w-3.5 h-3.w-3.5" />
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 flex gap-2 items-center">
                      {totalProfit.orders}
                      <TrendingDown className="w-3.5 h-3.w-3.5" />
                    </span>
                  )}
                </TableCell>
                <TableCell>{totalReason.orders}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
