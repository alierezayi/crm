import { ChartConfig } from "@/components/ui/chart";

export const chartConfig = {
  views: {
    label: "Balance",
  },
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-4))",
  },
    growth: {
      label: "Growth",
      color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export const balanceChartConfig = {
  views: {
    label: "Balance",
  },
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const growthChartConfig = {
  views: {
    label: "Growth",
  },
  growth: {
    label: "Growth",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
