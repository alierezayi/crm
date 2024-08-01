"use client";

import SearchBar from "@/components/routes/analyze/search-bar";
import AnalyzeTabs from "@/components/routes/analyze/tabs";
import HistoryPositionsContent from "@/components/routes/analyze/tabs/history-positions-content";
import OverviewContent from "@/components/routes/analyze/tabs/overview-content";
import UserInfo from "@/components/routes/analyze/user-info";
import { useAnalyzeTab } from "@/context/analyze-tab-context";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

export default function AnalyzePage() {
  const { activeTab } = useAnalyzeTab();
  const { data } = useBasicAnalyze();

  return (
    <div>
      <div className="my-3">
        <SearchBar />
      </div>
      <div>
        {data && (
          <div className="flex flex-col md:flex-row items-center justify-between mt-7 mb-3">
            <UserInfo />
            <AnalyzeTabs />
          </div>
        )}
        {activeTab === "Overview" && <OverviewContent />}
        {activeTab === "History Positions" && <HistoryPositionsContent />}
        {activeTab === "User IPs" && <div>user-ips</div>}
      </div>
    </div>
  );
}
