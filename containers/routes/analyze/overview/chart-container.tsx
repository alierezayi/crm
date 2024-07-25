"use client";

import { BalanceChart } from "@/components/routes/analyze/overview/balance-chart";
import { GrowthChart } from "@/components/routes/analyze/overview/growth-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryChartType } from "@/lib/types";
import { ChartArea } from "lucide-react";

export default function ChartContainer({
  historyBalance,
  historyGrowth,
}: {
  historyBalance: HistoryChartType[];
  historyGrowth: HistoryChartType[];
}) {
  return (
    <Card className="lg:col-span-3">
      <Tabs defaultValue="balance">
        <CardHeader className="flex md:flex-row md:items-end justify-between gap-y-5">
          <div className="flex flex-col gap-1">
            <CardTitle className="flex items-center gap-2">
              <ChartArea className="w-4" />
              Balance & Growth
            </CardTitle>
            <CardDescription>
              Overview of balance growth Win / Lost
            </CardDescription>
          </div>
          <TabsList className="w-fit">
            {["balance", "growth"].map((key) => {
              return (
                <TabsTrigger key={key} value={key}>
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="balance">
            <BalanceChart chartData={historyBalance} />
          </TabsContent>
          <TabsContent value="growth">
            <GrowthChart chartData={historyGrowth} />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
