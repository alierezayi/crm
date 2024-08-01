"use client";

import React, { Suspense } from "react";
import BasicAnalyzeProvider from "@/context/basic-analyze-context";
import ChartDrawdownProvider from "@/context/chart-drawdown-context";
import HistoryPositionsProvider from "@/context/history-positions-context";
import AnalyzeTabProvider from "@/context/analyze-tab-context";

export default function AnalyzeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BasicAnalyzeProvider>
      <ChartDrawdownProvider>
        <HistoryPositionsProvider>
          <AnalyzeTabProvider>
            <Suspense>{children}</Suspense>
          </AnalyzeTabProvider>
        </HistoryPositionsProvider>
      </ChartDrawdownProvider>
    </BasicAnalyzeProvider>
  );
}
