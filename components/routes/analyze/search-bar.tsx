"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

export default function SearchBar() {
  const [value, setValue] = useState<number | null>(null);

  const { fetchData, isLoading, data } = useBasicAnalyze();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!!value && value !== data?.user.login) {
      fetchData(value);
    }
  };

  const handleInputChange = (e: any) => setValue(+e.target.value);

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
      <Button disabled={isLoading} size="icon" type="submit">
        <Search className="w-5 h-5" />
      </Button>
    </form>
  );
}
