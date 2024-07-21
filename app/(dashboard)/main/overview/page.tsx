"use client";

import NowStatus from "@/components/routes/main/overview/now-status";
import PropAnalyze from "@/components/routes/main/overview/prop-analyze";
import Summary from "@/components/routes/main/overview/summary";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

export default function OverviewPage() {
  const { data, isLoading } = useBasicAnalyze();

  const summary = data?.summary;
  const nowStatus = data?.nowStatus;
  const propAnalyze = data?.propAnalyze;

  return (
    <>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        <div className="">
          <PropAnalyze {...propAnalyze} />
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 mt-5">
            <NowStatus {...nowStatus} />
            <Summary {...summary} />
          </div>
        </div>
      )}
    </>
  );
}
