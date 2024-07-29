import { TrendingDown, TrendingUp } from "lucide-react";
import CountTradingProgress from "./count-trading-progress";

export default function CountTrades({
  countProfitTrades,
  countLossTrades,
  countProfitTradesPercentage,
  countLossTradesPercentage,
}: {
  countProfitTrades: number;
  countLossTrades: number;
  countProfitTradesPercentage: number;
  countLossTradesPercentage: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center justify-between font-medium">
        <div className="flex items-center text-primary">
          <TrendingUp className="w-4 h-4 mr-1" />
          Profit
          <span className="ml-2">{countProfitTrades}</span>
        </div>
        <div className="flex items-center text-primary">
          <TrendingDown className="w-4 h-4 mr-1" />
          Loss
          <span className="ml-2">{countLossTrades}</span>
        </div>
      </div>
      <CountTradingProgress profit={countProfitTradesPercentage} />
      <div className="flex justify-between items-center">
        <span>{countProfitTradesPercentage}%</span>
        <span>{countLossTradesPercentage}%</span>
      </div>
    </div>
  );
}
