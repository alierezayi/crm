"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { useSearchParams } from "next/navigation";
import { useHistoryPositions } from "@/context/history-positions-context";

export default function SearchBar({
  value,
  onChange,
}: {
  value: number | null;
  onChange: Dispatch<SetStateAction<number | null>>;
}) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const {
    fetchData: fetchBasicAnalyze,
    isLoading: isBasicAnalyzeLoading,
    data: basicAnalyzeData,
  } = useBasicAnalyze();

  const {
    fetchData: fetchHistoryPositions,
    isLoading: isHistoryPositionsLoading,
    data: HistoryPositionsData,
  } = useHistoryPositions();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!!value) {
      tab === "overview" && fetchBasicAnalyze(value);
      tab === "history-positions" && fetchHistoryPositions(value);
    }
  };

  const handleInputChange = (e: any) => onChange(+e.target.value);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full sm:max-w-sm"
    >
      <Input
        type="number"
        onChange={handleInputChange}
        placeholder="Enter user code"
        maxLength={8}
        minLength={4}
        className="flex-1"
      />
      <Button
        disabled={isBasicAnalyzeLoading || isHistoryPositionsLoading}
        size="icon"
        type="submit"
      >
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
}
