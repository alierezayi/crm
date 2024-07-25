import OrdersTableRows from "@/components/routes/analyze/overview/orders-table-rows";
import PositionsTableRows from "@/components/routes/analyze/overview/positions-table-rows";
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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PositionsAndOrdersType } from "@/lib/types";
import { TableIcon } from "lucide-react";

export default function TableContainer({
  positions = [],
  orders = [],
}: {
  positions: PositionsAndOrdersType[];
  orders: PositionsAndOrdersType[];
}) {
  return (
    <Card className="lg:col-span-4 xl:col-span-2 2xl:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TableIcon className="w-4" />
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
            <PositionsTableRows positions={positions} />
            <OrdersTableRows orders={orders} />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
