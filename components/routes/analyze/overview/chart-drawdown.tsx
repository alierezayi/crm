"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartDrawdownConfig } from "@/configs/chart";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { useChartDrawdown } from "@/context/chart-drawdown-context";
import { ChartArea } from "lucide-react";
import { useEffect } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

export default function ChartDrawdown({ loginCode }: { loginCode: number }) {
  const {
    data: chartDrawdownData,
    error,
    isLoading,
    fetchData,
  } = useChartDrawdown();
  const { data: basicAnalyzeData } = useBasicAnalyze();

  useEffect(() => {
    if (!chartDrawdownData) {
      fetchData(loginCode);
    }
  }, [chartDrawdownData, basicAnalyzeData]);

  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartArea className="w-4" />
          Chart Drawdown
        </CardTitle>
        <CardDescription>Chart Drawdown</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-[310px]">
            <span>Loading...</span>
          </div>
        ) : (
          <>
            {error && (
              <div className="flex items-center justify-center w-full h-[310px]">
                <span>{error.message}</span>
              </div>
            )}
            {chartDrawdownData && (
              <ChartContainer
                className="aspect-auto h-[310px] w-full"
                config={chartDrawdownConfig}
              >
                <LineChart
                  accessibilityLayer
                  data={chartDrawdownData.chartDrawdown}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid y={1} vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={true}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const newFormatDate = value.time?.split("T")[0];
                      const date = new Date(newFormatDate);
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <ChartLegend
                    content={
                      <ChartLegendContent className="w-full overflow-x-auto" />
                    }
                  />

                  <Line
                    dataKey="balance"
                    type="monotone"
                    stroke="var(--color-balance)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="minEquity"
                    type="monotone"
                    stroke="var(--color-minEquity)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="maxEquity"
                    type="monotone"
                    stroke="var(--color-maxEquity)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="startBalance"
                    type="monotone"
                    stroke="var(--color-startBalance)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="eodBalance"
                    type="monotone"
                    stroke="var(--color-eodBalance)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="matBalance"
                    type="monotone"
                    stroke="var(--color-matBalance)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="mdBalance"
                    type="monotone"
                    stroke="var(--color-mdBalance)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
