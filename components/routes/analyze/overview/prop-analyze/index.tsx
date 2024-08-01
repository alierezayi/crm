import { PropAnalyzeType } from "@/lib/types";
import DayTrade from "./day-trade";
import DayComplete from "./day-complete";
import TradeLimitTime from "./trade-limit-time";
import LimitVolume from "./limit-volume";
import MaxStartBalance from "./max-start-balance";
import MaxEODBalance from "./max-eod-balance";
import MaxMDBalance from "./max-md-balance";

export default function PropAnalyze({
  dayTrade,
  dayTradeCompleteVolume,
  limitVolume,
  tradeLimitTime,
}: PropAnalyzeType) {
  return (
    <>
      <div className="w-full grid sm:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
        {dayTrade && <DayTrade value={dayTrade} />}
        {dayTradeCompleteVolume && (
          <DayComplete value={dayTradeCompleteVolume} />
        )}
        {tradeLimitTime && <TradeLimitTime value={tradeLimitTime} />}
        {limitVolume && <LimitVolume value={limitVolume} />}
      </div>
      <div className="w-full grid sm:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-3 mt-5">
        <MaxStartBalance />
        <MaxEODBalance />
        <MaxMDBalance />
      </div>
    </>
  );
}
