import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NowStatusType } from "@/lib/types";
import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  ChartNoAxesCombined,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { StatusBarChart } from "./status-bar-chart";

export default function NowStatus({
  equity,
  balance,
  margin,
  freeMargin,
  freeMarginDrawdown,
  marginLevel,
  profit,
  startBalanceDrawdown,
  relativeDrawdown,
  minBalanceEquity,
  maxBalanceEquity,
}: NowStatusType) {
  const dataStatus = {
    equity,
    balance,
    margin,
    freeMargin,
    profit,
  };

  return (
    <Card className="lg:col-span-4 xl:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartNoAxesCombined className="w-4" />
          Now Status
        </CardTitle>
        <CardDescription>Now Status</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 w-full">
        <StatusBarChart {...dataStatus} />
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex">
              <ArrowBigDownDash className="w-4 h-4 mr-2" />
              Min Balance
            </div>
            {minBalanceEquity} USD
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <ArrowBigUpDash className="w-4 h-4 mr-2" />
              Max Balance
            </div>
            {maxBalanceEquity} USD
          </div>
          {/* {!!margin && ( */}
          <>
            <div className="flex justify-between items-center">
              <div>Free Margin Drawdown</div>
              <div
                className={cn(
                  freeMarginDrawdown > 0 &&
                    "text-green-600 dark:text-green-400",
                  freeMarginDrawdown < 0 && "text-rose-600 dark:text-rose-400",
                  freeMarginDrawdown === 0 &&
                    "text-blue-600 dark:text-blue-400",
                  "flex items-center gap-2"
                )}
              >
                <span>{freeMarginDrawdown.toFixed(2)}%</span>
                {freeMarginDrawdown > 0 && <TrendingUp className="w-4 h-4" />}
                {freeMarginDrawdown < 0 && <TrendingDown className="w-4 h-4" />}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>Margin Level</div>
              <div
                className={cn(
                  marginLevel > 0 && "text-green-600 dark:text-green-400",
                  marginLevel < 0 && "text-rose-600 dark:text-rose-400",
                  marginLevel === 0 && "text-blue-600 dark:text-blue-400",
                  "flex items-center gap-2"
                )}
              >
                <span>{marginLevel.toFixed(2)}%</span>
                {marginLevel > 0 && <TrendingUp className="w-4 h-4" />}
                {marginLevel < 0 && <TrendingDown className="w-4 h-4" />}
              </div>
            </div>
          </>
          {/* )} */}

          <div className="flex justify-between items-center">
            <div>Start Balance Drawdown</div>
            <div
              className={cn(
                startBalanceDrawdown > 0 &&
                  "text-green-600 dark:text-green-400",
                startBalanceDrawdown < 0 && "text-rose-600 dark:text-rose-400",
                startBalanceDrawdown === 0 &&
                  "text-blue-600 dark:text-blue-400",
                "flex items-center gap-2"
              )}
            >
              <span>{startBalanceDrawdown.toFixed(2)} USD</span>
              {startBalanceDrawdown > 0 && <TrendingUp className="w-4 h-4" />}
              {startBalanceDrawdown < 0 && <TrendingDown className="w-4 h-4" />}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
