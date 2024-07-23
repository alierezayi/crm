"use client";

import NowStatus from "@/components/routes/main/overview/now-status";
import PropAnalyze from "@/components/routes/main/overview/prop-analyze";
import Summary from "@/components/routes/main/overview/summary";
import TradeStatus from "@/components/routes/main/overview/trade-status";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

export default function OverviewPage() {
  const { data, isLoading } = useBasicAnalyze();

  const summary = data?.summary;
  const nowStatus = data?.nowStatus;
  const tradeStatus = data?.countTrade;
  const propAnalyze = data?.propAnalyze;

  return (
    <>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        <div className="">
          <PropAnalyze {...propAnalyze} />
          <div className="grid md:grid-cols-2 mt-5 gap-5">
            <TradeStatus {...tradeStatus} />
            <NowStatus {...nowStatus} />
            <Summary {...summary} />
          </div>

        </div>
      )}
    </>
  );
}
