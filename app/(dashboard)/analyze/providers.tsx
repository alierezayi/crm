"use client";

import React from "react";
import BasicAnalyzeProvider from "@/context/basic-analyze-context";
import ChartDrawdownProvider from "@/context/chart-drawdown-context";
import HistoryPositionsProvider from "@/context/history-positions-context";
import AnalyzeTabProvider from "@/context/analyze-tab-context";
import UserIPsProvider from "@/context/user-ips-context";

export default function AnalyzeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BasicAnalyzeProvider>
      <ChartDrawdownProvider>
        <HistoryPositionsProvider>
          <UserIPsProvider>
            <AnalyzeTabProvider>
              {children}
            </AnalyzeTabProvider>
          </UserIPsProvider>
        </HistoryPositionsProvider>
      </ChartDrawdownProvider>
    </BasicAnalyzeProvider>
  );
}
