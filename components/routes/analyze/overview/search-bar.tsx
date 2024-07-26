"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState<number | null>(null);
  const { fetchData, isLoading } = useBasicAnalyze();

  const handleSearch = () => {
    if (value) fetchData(value);
  };

  return (
    <div className="flex items-center gap-2 w-full sm:max-w-xs">
      <Input
        type="number"
        onChange={(e) => setValue(+e.target.value)}
        placeholder="Enter user code"
        maxLength={8}
        minLength={4}
        className="flex-1"
      />
      <Button
        variant="secondary"
        disabled={isLoading}
        size="icon"
        onClick={handleSearch}
      >
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
}
