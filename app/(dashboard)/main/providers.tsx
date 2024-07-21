"use client";

import BasicAnalyzeProvider from "@/context/basic-analyze-context";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function MainProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BasicAnalyzeProvider>{children}</BasicAnalyzeProvider>;
}
