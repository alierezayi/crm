import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TradeStatusType } from "@/lib/types";
import { Calendar, CandlestickChart, ScrollText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PlatformStatusChart from "./platform-status-chart";
import CountTrades from "./count-trades";

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
  const dataCountTrades = {
    countProfitTrades,
    countProfitTradesPercentage,
    countLossTrades,
    countLossTradesPercentage,
  };
  const dataChart = {
    countTrades,
    countMobileTrading,
    countMobileTradingPercentage,
    countClientTrading,
    countClientTradingPercentage,
    countWebTrading,
    countWebTradingPercentage,
    countAlgoTrading,
    countAlgoTradingPercentage,
  };

  return (
    <Card className="lg:col-span-4 xl:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CandlestickChart className="w-4" />
          Trade Status
        </CardTitle>
        <CardDescription>Trade Status</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <PlatformStatusChart {...dataChart} />
        <CountTrades {...dataCountTrades} />
        <Separator />
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center">
            <ScrollText className="w-4 h-4 mr-3" />
            <p>Profit Factor {profitFactor}</p>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-3" />
            <p>{countDayTrade} Day Trade</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
