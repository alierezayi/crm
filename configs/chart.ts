import { ChartConfig } from "@/components/ui/chart";

export const balanceChartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const growthChartConfig = {
  growth: {
    label: "Growth",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
