import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PositionsType } from "@/lib/types";
import { LayoutList } from "lucide-react";

export default function Positions({
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
}: PositionsType) {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LayoutList className="w-4" />
          Positions
        </CardTitle>

        <CardDescription>Positions</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2"></CardContent>
    </Card>
  );
}
