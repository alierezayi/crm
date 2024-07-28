import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { LucideCalendarDays } from "lucide-react";
import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function DayTrade({ value }: { value: number }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <LucideCalendarDays className="w-4 h-4" />6 Day Trade
          </div>
          {value >= 6 ? (
            <Badge variant="success">Pass</Badge>
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
            endAngle={250}
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
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
          </RadialBarChart>
        </ChartContainer>
        <CardDescription>{value} Days</CardDescription>
      </CardContent>
    </Card>
  );
}
