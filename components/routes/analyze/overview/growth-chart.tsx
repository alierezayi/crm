import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { growthChartConfig } from "@/configs/chart";
import { HistoryChartType } from "@/lib/types";
import { LineChart, CartesianGrid, XAxis, Line } from "recharts";

export default function GrowthChart({
  chartData,
  activeChart,
}: {
  activeChart: "views" | "balance" | "growth";
  chartData: HistoryChartType[];
}) {
  if (!activeChart) return null;

  return (
    <ChartContainer
      config={growthChartConfig}
      className="aspect-auto h-[300px] w-full"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
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
        <Line
          dataKey={activeChart}
          type="monotone"
          stroke={`var(--color-${activeChart})`}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
