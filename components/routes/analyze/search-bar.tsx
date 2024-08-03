"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { useAnalyzeTab } from "@/context/analyze-tab-context";
import { useHistoryPositions } from "@/context/history-positions-context";
import { useChartDrawdown } from "@/context/chart-drawdown-context";

export default function SearchBar() {
  const [loginCode, setLoginCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { fetchData: fetchBasicAnalyze, data: basicAnalyzeData } =
    useBasicAnalyze();

  const { fetchData: fetchHistoryPositions, data: HistoryPositionsData } =
    useHistoryPositions();

  const { fetchData: fetchChartDrawdown } = useChartDrawdown();

  const { setActiveTab } = useAnalyzeTab();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!!loginCode && loginCode !== basicAnalyzeData?.user.login) {
      setIsLoading(true);
      setActiveTab("Overview");
      fetchBasicAnalyze(loginCode);
      fetchChartDrawdown(loginCode);
      setTimeout(() => {
        fetchHistoryPositions(loginCode);
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full sm:max-w-sm"
    >
      <Input
        type="number"
        onChange={(e) => setLoginCode(+e.target.value)}
        placeholder="Enter user code"
        maxLength={8}
        minLength={4}
        className="flex-1"
      />
      <Button disabled={isLoading} size="icon" type="submit">
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
}
