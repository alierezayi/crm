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
import { Toggle } from "@/components/ui/toggle";
import { chartDrawdownConfig } from "@/configs/chart";
import { useChartDrawdown } from "@/context/chart-drawdown-context";
import { getMinMaxValues, getOverallMinMax } from "@/lib/helper";
import { ChartDrawdownType } from "@/lib/types";
import { ChartArea } from "lucide-react";
import { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";

interface Balances {
  balance: number[];
  eodBalance: number[];
  matBalance: number[];
  maxEquity: number[];
  mdBalance: number[];
  minEquity: number[];
  startBalance: number[];
}

interface VisibleLines {
  balance: boolean;
  minEquity: boolean;
  maxEquity: boolean;
  startBalance: boolean;
  eodBalance: boolean;
  matBalance: boolean;
  mdBalance: boolean;
}

type LinesType =
  | "balance"
  | "minEquity"
  | "maxEquity"
  | "startBalance"
  | "eodBalance"
  | "matBalance"
  | "mdBalance";

export default function ChartDrawdown() {
  const [selectedLines, setSelectedLines] = useState([
    "balance",
    "minEquity",
    "maxEquity",
    "startBalance",
    "eodBalance",
    "matBalance",
    "mdBalance",
  ]);

  const toggleLine = (line: LinesType) => {
    setSelectedLines((prev) =>
      prev.includes(line)
        ? prev.filter((item) => item !== line)
        : [...prev, line]
    );
  };

  const { data: chartDrawdownData, error, isLoading } = useChartDrawdown();

  const chartDrawdown = chartDrawdownData?.chartDrawdown || [];

  const hasNonZeroBalance = (item: ChartDrawdownType): boolean =>
    Object.values(item).some((value) => value !== 0);

  const newChartDrawdown = chartDrawdown.filter(hasNonZeroBalance);
  console.log(chartDrawdownData);

  const { overallMax, overallMin } = getMinMaxValues(newChartDrawdown);

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
              <div className="flex items-center justify-center w-full h-[400px]">
                <span>{error.message}</span>
              </div>
            )}
            {chartDrawdownData && (
              <>
                <div className="flex justify-center gap-5 mb-10">
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("balance")}
                    pressed={selectedLines.includes("balance")}
                  >
                    balance
                  </Toggle>
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("minEquity")}
                    pressed={selectedLines.includes("minEquity")}
                  >
                    minEquity
                  </Toggle>
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("maxEquity")}
                    pressed={selectedLines.includes("maxEquity")}

                  >
                    maxEquity
                  </Toggle>
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("startBalance")}
                    pressed={selectedLines.includes("startBalance")}

                  >
                    startBalance
                  </Toggle>
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("eodBalance")}
                    pressed={selectedLines.includes("eodBalance")}

                  >
                    eodBalance
                  </Toggle>
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("matBalance")}
                    pressed={selectedLines.includes("matBalance")}

                  >
                    matBalance
                  </Toggle>
                  <Toggle
                    className="text-xs font-normal"
                    size="sm"
                    onClick={() => toggleLine("mdBalance")}
                    pressed={selectedLines.includes("mdBalance")}

                  >
                    mdBalance
                  </Toggle>
                </div>
                <ChartContainer
                  className="aspect-auto h-[400px] w-full"
                  config={chartDrawdownConfig}
                >
                  <LineChart
                    accessibilityLayer
                    data={newChartDrawdown}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid y={1} vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      minTickGap={32}
                      hide
                      tickFormatter={(value) => {
                        const newFormatDate = value.time?.split("T")[0];
                        const date = new Date(newFormatDate);
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                    />
                    <YAxis
                      type="number"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      minTickGap={32}
                      domain={[8000, overallMax]}
                      allowDataOverflow={true}
                      tickFormatter={(value) => `${value.toLocaleString()}`}
                      tickCount={20}
                      tickSize={5}
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
                    {selectedLines.includes("balance") && (
                      <Line
                        dataKey="balance"
                        type="monotone"
                        stroke="var(--color-balance)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                    {selectedLines.includes("eodBalance") && (
                      <Line
                        dataKey="eodBalance"
                        type="monotone"
                        stroke="var(--color-eodBalance)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                    {selectedLines.includes("matBalance") && (
                      <Line
                        dataKey="matBalance"
                        type="monotone"
                        stroke="var(--color-matBalance)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                    {selectedLines.includes("maxEquity") && (
                      <Line
                        dataKey="maxEquity"
                        type="monotone"
                        stroke="var(--color-maxEquity)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                    {selectedLines.includes("mdBalance") && (
                      <Line
                        dataKey="mdBalance"
                        type="monotone"
                        stroke="var(--color-mdBalance)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                    {selectedLines.includes("minEquity") && (
                      <Line
                        dataKey="minEquity"
                        type="monotone"
                        stroke="var(--color-minEquity)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                    {selectedLines.includes("startBalance") && (
                      <Line
                        dataKey="startBalance"
                        type="monotone"
                        stroke="var(--color-startBalance)"
                        strokeWidth={2}
                        dot={false}
                      />
                    )}
                  </LineChart>
                </ChartContainer>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
