"use client";

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
import { StatusBarChart } from "./now-status/status-bar-chart";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useBasicAnalyze } from "@/context/basic-analyze-context";

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
  const { data } = useBasicAnalyze();
  console.log(data?.historyBalance);

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
                    freeMarginDrawdown < 0 &&
                      "text-rose-600 dark:text-rose-400",
                    freeMarginDrawdown === 0 &&
                      "text-blue-600 dark:text-blue-400",
                    "flex items-center gap-2"
                  )}
                >
                  <span>{freeMarginDrawdown.toFixed(2)}%</span>
                  {freeMarginDrawdown > 0 && <TrendingUp className="w-4 h-4" />}
                  {freeMarginDrawdown < 0 && (
                    <TrendingDown className="w-4 h-4" />
                  )}
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
            <div>Relative Drawdown</div>
            <div
              className={cn(
                relativeDrawdown > 0 && "text-green-600 dark:text-green-400",
                relativeDrawdown < 0 && "text-rose-600 dark:text-rose-400",
                relativeDrawdown === 0 && "text-blue-600 dark:text-blue-400",
                "tems-center gap-2"
              )}
            >
              <span>{relativeDrawdown.toFixed(2)}%</span>
              {relativeDrawdown > 0 && <TrendingUp className="w-4 h-4" />}
              {relativeDrawdown < 0 && <TrendingDown className="w-4 h-4" />}
            </div>
          </div>

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
        {/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card
            className={cn(
              marginLevel > 0 && "bg-green-50 dark:bg-green-950",
              freeMarginDrawdown < 0 && "bg-rose-50 dark:bg-rose-950",
              "border-none bg-blue-50 dark:bg-blue-950"
            )}
          >
            <CardHeader>
              <CardTitle
                className={cn(
                  freeMarginDrawdown > 0 &&
                    "text-green-600 dark:text-green-400",
                  freeMarginDrawdown < 0 && "text-rose-800 dark:text-rose-200",
                  "text-blue-800 dark:text-blue-200"
                )}
              >
                Free Margin Drawdown
              </CardTitle>
            </CardHeader>
            <CardContent
              className={cn(
                freeMarginDrawdown > 0 && "text-green-800 dark:text-green-200",
                freeMarginDrawdown < 0 && "text-rose-800 dark:text-rose-200",
                "text-blue-800 dark:text-blue-200 text-xl flex justify-between items-center"
              )}
            >
              <div>{freeMarginDrawdown}%</div>
              {freeMarginDrawdown > 0 && <TrendingUp className="w-4 h-4" />}
              {freeMarginDrawdown < 0 && <TrendingDown />}
            </CardContent>
          </Card>
          <Card
            className={cn(
              freeMarginDrawdown > 0 && "bg-green-50 dark:bg-green-950",
              freeMarginDrawdown < 0 && "bg-rose-50 dark:bg-rose-950",
              "border-none bg-blue-50 dark:bg-blue-950"
            )}
          >
            <CardHeader>
              <CardTitle
                className={cn(
                  freeMarginDrawdown > 0 &&
                    "text-green-800 dark:text-green-200",
                  freeMarginDrawdown < 0 && "text-rose-800 dark:text-rose-200",
                  "text-blue-800 dark:text-blue-200"
                )}
              >
                Margin Level
              </CardTitle>
            </CardHeader>
            <CardContent
              className={cn(
                freeMarginDrawdown > 0 && "text-green-800 dark:text-green-200",
                freeMarginDrawdown < 0 && "text-rose-800 dark:text-rose-200",
                "text-blue-800 dark:text-blue-200 text-xl flex justify-between items-center"
              )}
            >
              <div>{freeMarginDrawdown}%</div>
              {freeMarginDrawdown > 0 && <TrendingUp className="w-4 h-4" />}
              {freeMarginDrawdown < 0 && <TrendingDown />}
            </CardContent>
          </Card>
          <div className="p-4 bg-teal-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Max Balance Equity</h2>
            <p className="text-xl font-bold text-teal-800">
              ${maxBalanceEquity}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Min Balance Equity</h2>
            <p className="text-xl font-bold text-gray-800">
              ${minBalanceEquity}
            </p>
          </div>
          <div className="p-4 bg-cyan-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Relative Drawdown</h2>
            <p className="text-xl font-bold text-cyan-800">
              {relativeDrawdown}%
            </p>
          </div>
          <div className="p-4 bg-lime-50 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Start Balance Drawdown</h2>
            <p className="text-xl font-bold text-lime-800">
              ${startBalanceDrawdown}
            </p>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
