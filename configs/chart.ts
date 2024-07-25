import { ChartConfig } from "@/components/ui/chart";

export const balanceChartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const growthChartConfig = {
  growth: {
    label: "Growth",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;
