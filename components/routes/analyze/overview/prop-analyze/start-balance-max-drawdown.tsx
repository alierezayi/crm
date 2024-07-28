"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useChartDrawdown } from "@/context/chart-drawdown-context";
import { CgPerformance } from "react-icons/cg";
import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const chartConfig = {
  trade: {
    label: "Trade",
  },
  day: {
    label: "Day",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function StartBalanceMaxDrawdown() {
  const { data } = useChartDrawdown();

  const value = data?.maxStartBalanceDrawdown!;

  const date = `${data?.maxStartBalanceDrawdownTime.split("T")[0]} ${
    data?.maxStartBalanceDrawdownTime.split("T")[1]
  }`;

  console.log(date);

  const chartData = [
    { type: "day", trade: value, fill: value >= 1 ? "#e11d48" : "#2563eb" },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <CgPerformance className="w-4 h-4" />
            Start balance max drawdown
          </div>
          {value >= 1 ? (
            <Badge variant="danger">Rejected</Badge>
          ) : (
            <Badge variant="info">Stable</Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-end">
        <ChartContainer config={chartConfig} className="aspect-square h-[50px]">
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={value * 133.3}
            innerRadius={18}
            outerRadius={33}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[21, 15]}
            />
            <RadialBar dataKey="trade" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
          </RadialBarChart>
        </ChartContainer>
        <CardDescription className="flex flex-col gap-2">
          <div>{value}% drawdown</div>
          <div className="text-xs">{date}</div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
