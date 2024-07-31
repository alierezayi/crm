"use client";

import SearchBar from "@/components/routes/analyze/search-bar";
import AnalyzeTabs from "@/components/routes/analyze/tabs";
import HistoryPositionsContent from "@/components/routes/analyze/tabs/history-positions-content";
import OverviewContent from "@/components/routes/analyze/tabs/overview-content";
import UserInfo from "@/components/routes/analyze/user-info";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function AnalyzePage() {
  const [loginCode, setLoginCode] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between gap-y-5 md:items-center md:mb-0 py-5">
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 md:items-center">
          <SearchBar value={loginCode} onChange={setLoginCode} />
          <UserInfo />
        </div>
        <AnalyzeTabs />
      </div>
      <div>
        {tab === "overview" && <OverviewContent />}
        {tab === "history-positions" && (
          <HistoryPositionsContent loginCode={loginCode} />
        )}
        {tab === "user-ips" && <div>user-ips</div>}
      </div>
    </div>
  );
}
