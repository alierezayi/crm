import { ChartConfig } from "@/components/ui/chart";

export const balanceChartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-area-balance))",
  },
} satisfies ChartConfig;

export const growthChartConfig = {
  growth: {
    label: "Growth",
    color: "hsl(var(--chart-area-growth))",
  },
} satisfies ChartConfig;

export const chartDrawdownConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
  minEquity: {
    label: "Min Equity",
    color: "hsl(var(--chart-2))",
  },
  maxEquity: {
    label: "Max Equity",
    color: "hsl(var(--chart-3))",
  },
  startBalance: {
    label: "Start Balance",
    color: "hsl(var(--chart-4))",
  },
  eodBalance: {
    label: "EOD Balance",
    color: "hsl(var(--chart-5))",
  },
  matBalance: {
    label: "Mat Balance",
    color: "hsl(var(--chart-6))",
  },
  mdBalance: {
    label: "MD Balance",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig;
