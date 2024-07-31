"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  value: {
    label: "Value",
  },
  equity: {
    label: "Equity",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))",
  },
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-3))",
  },
  margin: {
    label: "Margin",
    color: "hsl(var(--chart-4))",
  },
  freeMargin: {
    label: "Free Margin",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

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
  const chartData = [
    {
      metric: "equity",
      value: equity,
      fill: "var(--color-equity)",
    },
    {
      metric: "balance",
      value: balance,
      fill: "var(--color-balance)",
    },
    {
      metric: "profit",
      value: profit,
      fill: "var(--color-profit)",
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
          right: 0,
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
            // position="insideEnd"
            offset={8}
            className="fill-[#ffffff] font-medium"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
