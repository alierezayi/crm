"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HistoryChartType } from "@/lib/types";
import { balanceChartConfig } from "@/configs/chart";

export function BalanceChart({ chartData }: { chartData: HistoryChartType[] }) {
  const newChartData = chartData?.map((item: any) => {
    const newDateString = item.time?.split("T")[0];
    delete item.time;
    return {
      ...item,
      date: newDateString,
    };
  });

  return (
    <ChartContainer
      config={balanceChartConfig}
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
        <YAxis dataKey="balance" hide />
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
          dataKey="balance"
          type="natural"
          fill="var(--color-balance)"
          fillOpacity={0.4}
          stroke="var(--color-balance)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
