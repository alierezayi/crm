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
    color: "hsl(var(--chart-line-min-equity))",
  },
  minEquity: {
    label: "Min Equity",
    color: "hsl(var(--chart-area-balance))",
  },
  maxEquity: {
    label: "Max Equity",
    color: "hsl(var(--chart-line-max-equity))",
  },
  startBalance: {
    label: "Start Balance",
    color: "hsl(var(--chart-5))",
  },
  eodBalance: {
    label: "EOD Balance",
    color: "hsl(var(--chart-line-eod-balance))",
  },
  matBalance: {
    label: "Mat Balance",
    color: "hsl(var(--chart-line-mat-balance))",
  },
  mdBalance: {
    label: "MD Balance",
    color: "hsl(var(--chart-line-md-balance))",
  },
} satisfies ChartConfig;
