"use client";

import NowStatus from "@/components/routes/analyze/overview/now-status";
import PropAnalyze from "@/components/routes/analyze/overview/prop-analyze";
import Summary from "@/components/routes/analyze/overview/summary";
import TradeStatus from "@/components/routes/analyze/overview/trade-status";
import ChartContainer from "@/containers/routes/analyze/overview/chart-container";
import TableContainer from "@/containers/routes/analyze/overview/table-container";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

export default function OverviewPage() {
  const { data, isLoading } = useBasicAnalyze();

  const summary = data?.summary;
  const nowStatus = data?.nowStatus;
  const tradeStatus = data?.countTrade;
  const propAnalyze = data?.propAnalyze;
  const positions = data?.positions;
  const orders = data?.orders;
  const historyBalance = data?.historyBalance;
  const historyGrowth = data?.historyGrowth;

  return (
    <>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        <div>
          <PropAnalyze {...propAnalyze} />
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5">
            <TableContainer orders={orders} positions={positions} />
            <ChartContainer
              historyBalance={historyBalance}
              historyGrowth={historyGrowth}
            />
            <Summary {...summary} />
            <TradeStatus {...tradeStatus} />
            <NowStatus {...nowStatus} />
          </div>
        </div>
      )}
    </>
  );
}
