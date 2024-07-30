"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HistoryChartType } from "@/lib/types";
import { growthChartConfig } from "@/configs/chart";

export function GrowthChart({ chartData }: { chartData: HistoryChartType[] }) {
  const newChartData = chartData?.map((item: any) => {
    const date = item.time?.split("T")[0];
    const growth = item.balance;
    return {
      growth,
      date,
    };
  });

  return (
    <ChartContainer
      config={growthChartConfig}
      className="aspect-auto h-[310px] w-full"
    >
      <AreaChart
        accessibilityLayer
        data={newChartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          hide
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="w-[150px]"
              nameKey="views"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              }}
            />
          }
        />
        <Area
          dataKey="growth"
          type="natural"
          fill="var(--color-growth)"
          fillOpacity={0.4}
          stroke="var(--color-growth)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
