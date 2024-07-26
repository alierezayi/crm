"use client";

import NowStatus from "@/components/routes/analyze/overview/now-status";
import PropAnalyze from "@/components/routes/analyze/overview/prop-analyze";
import Summary from "@/components/routes/analyze/overview/summary";
import TradeStatus from "@/components/routes/analyze/overview/trade-status";
import Error from "@/containers/error";
import ChartContainer from "@/containers/routes/analyze/overview/chart-container";
import TableContainer from "@/containers/routes/analyze/overview/table-container";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import ChartDrawdown from "@/components/routes/analyze/overview/chart-drawdown";

export default function OverviewPage() {
  const router = useRouter();
  const { data, isLoading, error } = useBasicAnalyze();

  const summary = data?.summary;
  const nowStatus = data?.nowStatus;
  const tradeStatus = data?.countTrade;
  const propAnalyze = data?.propAnalyze;
  const positions = data?.positions;
  const orders = data?.orders;
  const historyBalance = data?.historyBalance;
  const historyGrowth = data?.historyGrowth;
  const loginCode = data?.user.login;

  useEffect(() => {
    if (error?.response?.status === 401) {
      toast.error("Token Expired", {
        description: "Logging out of account.",
      });
      Cookies.remove("token");
      router.push("/");
    }
  }, [error]);

  return (
    <>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        <>
          {error && error?.response?.status !== 400 && (
            <Error message="Unexpected error." />
          )}
          {error?.response?.status === 400 && <div>User not founded.</div>}
          {data && (
            <div>
              <PropAnalyze {...propAnalyze} />
              <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5">
                <ChartContainer
                  historyBalance={historyBalance}
                  historyGrowth={historyGrowth}
                />
                <Summary {...summary} />
                <TradeStatus {...tradeStatus} />
                <NowStatus {...nowStatus} />
                <TableContainer orders={orders} positions={positions} />
                <ChartDrawdown loginCode={loginCode} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
