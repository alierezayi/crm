import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { NowStatusType } from "@/lib/types";
import { TbMoneybag } from "react-icons/tb";
import {
  CandlestickChart,
  FilePieChart,
  TrendingDown,
  TrendingUp,
  ChartNoAxesCombined,
  Scale,
  ArrowBigDownDash,
  ArrowBigUpDash,
} from "lucide-react";
import Image from "next/image";
import chartUp from "@/assets/images/chart-up.svg";
import chartDown from "@/assets/images/chart-down.svg";
import { Separator } from "@/components/ui/separator";
import { MdShowChart } from "react-icons/md";

export default function NowStatus({
  equity,
  balance,
  margin,
  marginPercent,
  freeMargin,
  freeMarginDrawdown,
  marginLevel,
  profit,
  startBalanceDrawdown,
  relativeDrawdown,
  minBalanceEquity,
  maxBalanceEquity,
}: NowStatusType) {
  return (
    <Card className="w-full flex-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartNoAxesCombined className="w-4" />
          Now Status
        </CardTitle>
        <CardDescription>Now Status</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full font-medium">
          <h2 className="text-lg ">Equity</h2>
          {equity >= 0 ? (
            <div className="text-emerald-600 dark:text-emerald-400 flex gap-5 items-end">
              <span className="text-base -my-1.5">{equity?.toFixed(2)}</span>
              <Image src={chartUp} alt="chart" width={70} height={20} />
            </div>
          ) : (
            <div className="text-rose-600 dark:text-rose-400 flex gap-2 items-center">
              <span>{equity?.toFixed(2)}</span>
              <Image src={chartDown} alt="chart" width={70} height={20} />
            </div>
          )}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-4 h-4" /> Balance
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1.5">
                {balance}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-5">
                  <div className="flex gap-1">
                    <ArrowBigUpDash className="w-4 h-4" />
                    <span>Max Balance Equity </span>
                  </div>
                  <span className="text-gray-500">{minBalanceEquity}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex gap-1">
                    <ArrowBigDownDash className="w-4 h-4" />
                    <span>Min Balance Equity </span>
                  </div>
                  <span className="text-gray-500">{minBalanceEquity}</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex gap-1">
                    <MdShowChart className="w-4 h-4" />
                    <span>Start Balance Draw Down</span>
                  </div>
                  <span className="text-gray-500">{minBalanceEquity}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Separator />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex w-full items-center justify-between text- font-semibold">
              <div className="">Margin</div>
              <div>
                <span className="mr-1">{margin}</span> ({marginPercent}%)
              </div>
            </div>
            <Progress value={marginPercent} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* <Card>
            <CardHeader >
              <CardTitle className="flex items-center gap-2">Margin</CardTitle>
              <CardDescription>
                <div className="text-end mb-1">
                  <span className="mr-1">{margin}</span> ({marginPercent}%)
                </div>
                <Progress value={marginPercent} />
              </CardDescription>
            </CardHeader>
          </Card> */}
          <Card
          // className="border-none bg-gray-100 dark:bg-gray-900"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Free Margin
              </CardTitle>
              <CardDescription>{freeMargin}</CardDescription>
            </CardHeader>
          </Card>
          <Card
          // className="border-none bg-gray-100 dark:bg-gray-900"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 truncate">
                Margin Drawdown
              </CardTitle>
              <CardDescription>{freeMarginDrawdown}</CardDescription>
            </CardHeader>
          </Card>
          <Card
          // className="border-none bg-gray-100 dark:bg-gray-900"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Margin Level
              </CardTitle>
              <CardDescription>{marginLevel}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
