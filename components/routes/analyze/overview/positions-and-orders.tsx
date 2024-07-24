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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PositionsAndOrdersType } from "@/lib/types";
import { LayoutList } from "lucide-react";

export default function PositionsAndOrders({
  positions,
  orders,
}: {
  positions: PositionsAndOrdersType[];
  orders: PositionsAndOrdersType[];
}) {
  const mergedItems = [...positions, ...orders];

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
              <TableHead>Type</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>OpenPrice</TableHead>
              <TableHead>OpenTime</TableHead>
              <TableHead>StopLoss</TableHead>
              <TableHead>TakeProfit</TableHead>
              <TableHead>NowPrice</TableHead>
              <TableHead>ClosePrice</TableHead>
              <TableHead>CloseTime</TableHead>
              <TableHead>Swap</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>PositionDuration</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mergedItems.map(
              (
                {
                  ticket,
                  symbol,
                  type,
                  volume,
                  openPrice,
                  openTime,
                  stopLoss,
                  takeProfit,
                  nowPrice,
                  closePrice,
                  closeTime,
                  swap,
                  profit,
                  commission,
                  positionDuration,
                  reason,
                },
                i
              ) => (
                <TableRow key={i}>
                  <TableCell>{ticket}</TableCell>
                  <TableCell>{symbol}</TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>{volume}</TableCell>
                  <TableCell>{openPrice}</TableCell>
                  <TableCell className="truncate">{openTime}</TableCell>
                  <TableCell>{stopLoss}</TableCell>
                  <TableCell>{takeProfit}</TableCell>
                  <TableCell>{nowPrice}</TableCell>
                  <TableCell>{closePrice}</TableCell>
                  <TableCell className="truncate">{closeTime}</TableCell>
                  <TableCell>{swap}</TableCell>
                  <TableCell>{profit}</TableCell>
                  <TableCell>{commission}</TableCell>
                  <TableCell>{positionDuration}</TableCell>
                  <TableCell>{reason}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
