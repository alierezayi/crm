"use client";

import React, { Suspense } from "react";
import BasicAnalyzeProvider from "@/context/basic-analyze-context";
import ChartDrawdownProvider from "@/context/chart-drawdown-context";

export default function AnalyzeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BasicAnalyzeProvider>
      <ChartDrawdownProvider>
        <Suspense>{children}</Suspense>
      </ChartDrawdownProvider>
    </BasicAnalyzeProvider>
  );
}
