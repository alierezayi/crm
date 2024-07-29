import { PropAnalyzeType } from "@/lib/types";
import DayTrade from "./day-trade";
import DayComplete from "./day-complete";
import TradeLimitTime from "./trade-limit-time";
import LimitVolume from "./limit-volume";
import MaxStartBalance from "./max-start-balance";
import MaxEODBalance from "./max-eod-balance";

export default function PropAnalyze({
  dayTrade,
  dayTradeCompleteVolume,
  limitVolume,
  tradeLimitTime,
}: PropAnalyzeType) {
  return (
    <div>
      <div className="w-full grid sm:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
        <DayTrade value={dayTrade} />
        <DayComplete value={dayTradeCompleteVolume} />
        <TradeLimitTime value={tradeLimitTime} />
        <LimitVolume value={limitVolume} />
      </div>
      <div className="w-full grid sm:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-3 mt-2">
        <MaxStartBalance />
        <MaxEODBalance />
      </div>
    </div>
  );
}
