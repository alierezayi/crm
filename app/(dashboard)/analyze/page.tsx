"use client";

import SearchBar from "@/components/routes/analyze/search-bar";
import AnalyzeTabs from "@/components/modules/analyze-tabs";
import UserInfo from "@/components/routes/analyze/user-info";
import { useAnalyzeTab } from "@/context/analyze-tab-context";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import HistoryPositionsContent from "@/components/routes/analyze/history-positions";
import OverviewContent from "@/components/routes/analyze/overview";
import CopyTradeAction from "@/components/routes/analyze/copy-trade";
import UserIPsContent from "@/components/routes/analyze/user-ips";

export default function AnalyzePage() {
  const { activeTab } = useAnalyzeTab();
  const { data } = useBasicAnalyze();

  return (
    <div>
      <div className="my-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-5">
        <SearchBar />
        {data?.user.login ? <CopyTradeAction /> : null}
      </div>
      <div>
        {data && (
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-7 mb-3 gap-y-5">
            <UserInfo />
            <AnalyzeTabs />
          </div>
        )}
        {activeTab === "Overview" && <OverviewContent />}
        {activeTab === "History Positions" && <HistoryPositionsContent />}
        {activeTab === "User IPs" && <UserIPsContent />}
      </div>
    </div>
  );
}
