import { PropAnalyzeType } from "@/lib/types";
import DayTrade from "./day-trade";
import DayComplete from "./day-complete";
import TradeLimitTime from "./trade-limit-time";
import LimitVolume from "./relative-drawdown";

export default function PropAnalyze({
  dayTrade,
  dayTradeCompleteVolume,
  tradeLimitTime,
  relativeDrawdown,
}: PropAnalyzeType) {
  return (
    <div className="w-full grid sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      <DayTrade value={dayTrade} />
      <DayComplete value={dayTradeCompleteVolume} />
      <TradeLimitTime value={tradeLimitTime} />
      <LimitVolume value={relativeDrawdown} />
    </div>
  );
}
