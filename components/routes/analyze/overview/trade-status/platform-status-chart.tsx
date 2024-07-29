import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";

type PlatformStatusChartType = {
  countMobileTrading: number;
  countMobileTradingPercentage: number;
  countClientTrading: number;
  countClientTradingPercentage: number;
  countWebTrading: number;
  countWebTradingPercentage: number;
  countAlgoTrading: number;
  countAlgoTradingPercentage: number;
  countTrades: number;
};

export default function PlatformStatusChart({
  countTrades,
  countMobileTrading,
  countMobileTradingPercentage,
  countClientTrading,
  countClientTradingPercentage,
  countWebTrading,
  countWebTradingPercentage,
  countAlgoTrading,
  countAlgoTradingPercentage,
}: PlatformStatusChartType) {
  const chartConfig = {
    trade: {
      label: "Trades",
    },
    mobile: {
      label: `Mobile ${countMobileTradingPercentage}%`,
      // icon: MobileIcon,
      color: "hsl(var(--chart-1))",
    },
    client: {
      label: `Client ${countClientTradingPercentage}%`,
      // icon: UserRound,
      color: "hsl(var(--chart-2))",
    },
    web: {
      label: `Web ${countWebTradingPercentage}%`,
      // icon: LaptopMinimal,
      color: "hsl(var(--chart-3))",
    },
    algo: {
      label: `Algo ${countAlgoTradingPercentage}%`,
      // icon: ChartPie,
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  const chartData = [
    {
      platform: "mobile",
      trade: countMobileTrading,
      fill: "var(--color-mobile)",
    },
    {
      platform: "client",
      trade: countClientTrading,
      fill: "var(--color-client)",
    },
    {
      platform: "web",
      trade: countWebTrading,
      fill: "var(--color-web)",
    },
    {
      platform: "algo",
      trade: countAlgoTrading,
      fill: "var(--color-algo)",
    },
  ];
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          labelClassName=""
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Pie
          data={chartData}
          dataKey="trade"
          nameKey="platform"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {countTrades.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      All Trades
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="platform" />}
          className="-translate-y-2 flex-wrap gap-2 w-full"
        />
      </PieChart>
    </ChartContainer>
  );
}
