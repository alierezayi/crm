"use client";

import NowStatus from "@/components/routes/analyze/overview/now-status";
import Positions from "@/components/routes/analyze/overview/positions";
import PropAnalyze from "@/components/routes/analyze/overview/prop-analyze";
import Summary from "@/components/routes/analyze/overview/summary";
import TradeStatus from "@/components/routes/analyze/overview/trade-status";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

export default function OverviewPage() {
  const { data, isLoading } = useBasicAnalyze();

  const summary = data?.summary;
  const nowStatus = data?.nowStatus;
  const tradeStatus = data?.countTrade;
  const propAnalyze = data?.propAnalyze;
  const positions = data?.positions;

  return (
    <>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        <div>
          <PropAnalyze {...propAnalyze} />
          <div className="grid md:grid-cols-4 mt-5 gap-5">
            <Summary {...summary} />
            <Positions {...positions} />
            <TradeStatus {...tradeStatus} />
            <NowStatus {...nowStatus} />
          </div>
        </div>
      )}
    </>
  );
}
