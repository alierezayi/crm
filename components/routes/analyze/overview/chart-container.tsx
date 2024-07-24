"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chartConfig } from "@/configs/chart";
import { HistoryChartType } from "@/lib/types";
import { LayoutList } from "lucide-react";
import { useState } from "react";
import BalanceChart from "./balance-chart";
import GrowthChart from "./growth-chart";

export default function HistoryChart({
  historyBalance,
  historyGrowth,
}: {
  historyBalance: HistoryChartType[];
  historyGrowth: HistoryChartType[];
}) {
  const [activeChart, setActiveChart] =
    useState<keyof typeof chartConfig>("balance");

  const newBalanceData = historyBalance?.map((item: any) => {
    const newDateString = item.time?.split("T")[0];
    delete item.time;
    return {
      ...item,
      date: newDateString,
    };
  });
  // console.log(historyBalance);
  

  const newGrowthData = historyGrowth?.map((item: any) => {
    const newDateString = item.time?.split("T")[0];
    delete item.time;
    return {
      ...item,
      date: newDateString,
    };
  });

  return (
    <Card className="lg:col-span-4">
      <CardHeader className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle className="flex items-center gap-2">
            <LayoutList className="w-4" />
            Balance & Growth
          </CardTitle>
          <CardDescription>
            Overview of balance growth Win / Lost
          </CardDescription>
        </div>
        <Tabs>
          <TabsList className="w-fit">
            {["balance", "growth"].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <TabsTrigger
                  onClick={() => setActiveChart(chart)}
                  key={chart}
                  data-active={activeChart === chart}
                  className="data-[active=true]:bg-background data-[active=true]:text-foreground"
                  value={key}
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <BalanceChart activeChart={activeChart} chartData={newBalanceData} />
        <GrowthChart activeChart={activeChart} chartData={newGrowthData} />
      </CardContent>
    </Card>
  );
}
