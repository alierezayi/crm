import { PropAnalyzeType } from "@/lib/types";
import DayTrade from "./prop-analyze/day-trade";
import DayComplete from "./prop-analyze/day-complete";
import TradeLimitTime from "./prop-analyze/trade-limit-time";
import LimitVolume from "./prop-analyze/limit-volume";
import StartBalanceMaxDrawdown from "./prop-analyze/start-balance-max-drawdown";

export default function PropAnalyze({
  dayTrade,
  dayTradeCompleteVolume,
  limitVolume,
  tradeLimitTime,
}: PropAnalyzeType) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
      <DayTrade value={dayTrade} />
      <DayComplete value={dayTradeCompleteVolume} />
      <TradeLimitTime value={tradeLimitTime} />
      <LimitVolume value={limitVolume} />
      <StartBalanceMaxDrawdown />
    </div>
  );
}
