import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { MdOutlineAccessTime } from "react-icons/md";
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

export default function TradeLimitTime({ value }: { value: number }) {
  const chartData = [
    { type: "day", trade: value, fill: value >= 3 ? "#e11d48" : "#16a34a" },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <MdOutlineAccessTime className="w-4 h-4" />3 Min Trade
          </div>
          {value >= 3 ? (
            <Badge variant="danger">Rejected</Badge>
          ) : (
            <Badge variant="success">Passed</Badge>
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
        <CardDescription>{value} Trade</CardDescription>
      </CardContent>
    </Card>
  );
}
