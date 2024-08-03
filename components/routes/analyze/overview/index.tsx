"use client";

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
import ChartDrawdown from "@/components/templates/charts/chart-drawdown";
import NowStatus from "@/components/routes/analyze/overview/now-status";

export default function OverviewContent() {
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
  console.log(data);

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
            <div className="mt-8">
              <PropAnalyze {...propAnalyze} />
              <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-y-5 gap-x-2">
                <Summary {...summary} />
                <ChartContainer
                  historyBalance={historyBalance}
                  historyGrowth={historyGrowth}
                />
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
