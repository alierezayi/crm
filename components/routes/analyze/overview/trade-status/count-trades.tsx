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
    <div className="flex flex-col gap-1 text-xs">
      <div className="flex w-full items-center justify-between font-medium">
        <div className="flex items-center text-primary">
          Profit
          <span className="ml-2">{countProfitTrades}</span>
          <TrendingUp className="w-3.5 h-3.5 ml-1" />
        </div>
        <div className="flex items-center text-primary">
          Loss
          <span className="ml-2">{countLossTrades}</span>
          <TrendingDown className="w-3.5 h-3.5 ml-1" />
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
