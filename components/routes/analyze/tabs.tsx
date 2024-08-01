"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActiveTabType, useAnalyzeTab } from "@/context/analyze-tab-context";
import { cn } from "@/lib/utils";

const tabs = ["Overview", "History Positions", "User IPs"];

export default function AnalyzeTabs() {
  const { activeTab, setActiveTab } = useAnalyzeTab();
  return (
    <Tabs>
      <TabsList className="w-fit">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            className={cn(tab === activeTab && "bg-background text-foreground")}
            value={tab}
            onClick={() => setActiveTab(tab as ActiveTabType)}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
