"use client";

import React from "react";
import BasicAnalyzeProvider from "@/context/basic-analyze-context";

export default function AnalyzeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BasicAnalyzeProvider>{children}</BasicAnalyzeProvider>;
}
