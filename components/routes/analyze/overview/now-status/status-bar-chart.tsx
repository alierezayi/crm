"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function StatusBarChart({
  balance,
  margin,
  profit,
  equity,
  freeMargin,
}: {
  balance: number;
  margin: number;
  profit: number;
  equity: number;
  freeMargin: number;
}) {
  const newProfit = profit < 0 ? Math.abs(profit) : profit;

  const chartConfig = {
    value: {
      label: "Value",
    },
    equity: {
      label: "Equity",
      color: "hsl(var(--chart-area-balance))",
    },
    profit: {
      label: "Profit",
      color: `hsl(var(${profit >= 0 ? "--chart-2" : "--chart-status-profit"}))`,
    },
    balance: {
      label: "Balance",
      color: "hsl(var(--chart-status-balance))",
    },
    margin: {
      label: "Margin",
      color: "hsl(var(--chart-line-md-balance))",
    },
    freeMargin: {
      label: "Free Margin",
      color: "hsl(var(--chart-line-max-equity))",
    },
  } satisfies ChartConfig;

  const chartData = [
    {
      metric: "equity",
      value: equity,
      fill: "var(--color-equity)",
    },
    {
      metric: "profit",
      value: newProfit,
      fill: "var(--color-profit)",
    },
    {
      metric: "balance",
      value: balance,
      fill: "var(--color-balance)",
    },
    {
      metric: "margin",
      value: margin,
      fill: "var(--color-margin)",
    },
    {
      metric: "freeMargin",
      value: freeMargin,
      fill: "var(--color-freeMargin)",
    },
  ];

  return (
    <ChartContainer config={chartConfig} className="h-[210px]">
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          right: 50,
        }}
      >
        <YAxis
          dataKey="metric"
          type="category"
          className="text-black"
          tickMargin={5}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="value" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" hideLabel />}
        />
        <Bar dataKey="value" layout="vertical" radius={5}>
          <LabelList
            dataKey="value"
            position="right"
            offset={8}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
