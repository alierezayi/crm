import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TradeStatusType } from "@/lib/types";
import {
  Calendar,
  CandlestickChart,
  ChartPie,
  LaptopMinimal,
  ScrollText,
  TrendingDown,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { MobileIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

function TradeStatusItem({
  item,
  percent,
  title,
  icon,
}: {
  item: number;
  icon: React.ReactNode;
  percent: number;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center justify-between text-xs font-medium">
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          {title}
        </div>
        <div>
          <span className="mr-1">{item}</span> ({percent}%)
        </div>
      </div>
      <Progress value={percent} />
    </div>
  );
}

export default function TradeStatus({
  countTrades,
  countProfitTrades,
  countProfitTradesPercentage,
  countLossTrades,
  countLossTradesPercentage,
  profitFactor,
  countMobileTrading,
  countMobileTradingPercentage,
  countClientTrading,
  countClientTradingPercentage,
  countWebTrading,
  countWebTradingPercentage,
  countAlgoTrading,
  countAlgoTradingPercentage,
  countDayTrade,
}: TradeStatusType) {
  return (
    <Card className="w-full flex-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CandlestickChart className="w-4" />
          Trade Status
        </CardTitle>{" "}
        <CardDescription>Trade Status</CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="flex items-center justify-between w-full mb-4 font-medium">
          <h2 className="text-lg ">All Trades</h2>
          <span className="text-base">{countTrades}</span>
        </div>
        <div className="flex flex-col gap-5">
          <TradeStatusItem
            title="Count Profit Trading"
            icon={<TrendingUp className="w-4 h-4" />}
            item={countProfitTrades}
            percent={countProfitTradesPercentage}
          />
          <TradeStatusItem
            title="Count Loss Trading"
            icon={<TrendingDown className="w-4 h-4" />}
            item={countLossTrades}
            percent={countLossTradesPercentage}
          />
          <TradeStatusItem
            title="Count Mobile Trading"
            icon={<MobileIcon className="w-4 h-4" />}
            item={countMobileTrading}
            percent={countMobileTradingPercentage}
          />
          <TradeStatusItem
            title="Count Client Trading"
            icon={<UserRound className="w-4 h-4" />}
            item={countClientTrading}
            percent={countClientTradingPercentage}
          />
          <TradeStatusItem
            title="Count Web Trading"
            icon={<LaptopMinimal className="w-4 h-4" />}
            item={countWebTrading}
            percent={countWebTradingPercentage}
          />
          <TradeStatusItem
            title="Count Algo Trading"
            icon={<ChartPie className="w-4 h-4" />}
            item={countAlgoTrading}
            percent={countAlgoTradingPercentage}
          />
          <Separator />
          <div className="flex items-center gap-2 text-xs font-medium">
            <div className="flex items-center">
              <ScrollText className="w-4 h-4 mr-3" />
              Profit Factor
            </div>
            <div>
              <span>{profitFactor}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium ">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3" />
              Day Trade
            </div>
            <div>
              <span>{countDayTrade}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 "></div>
      </CardContent>
    </Card>
  );
}
