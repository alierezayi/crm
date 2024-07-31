"use client";

import React, { Suspense } from "react";
import BasicAnalyzeProvider from "@/context/basic-analyze-context";
import ChartDrawdownProvider from "@/context/chart-drawdown-context";
import HistoryPositionsProvider from "@/context/history-positions-context";

export default function AnalyzeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BasicAnalyzeProvider>
      <ChartDrawdownProvider>
        <HistoryPositionsProvider>
          <Suspense>{children}</Suspense>
        </HistoryPositionsProvider>
      </ChartDrawdownProvider>
    </BasicAnalyzeProvider>
  );
}
