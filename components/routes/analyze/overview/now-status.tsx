import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NowStatusType } from "@/lib/types";
import { ChartNoAxesCombined } from "lucide-react";

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
    <Card className="lg:col-span-4 xl:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartNoAxesCombined className="w-4" />
          Now Status
        </CardTitle>
        <CardDescription>Now Status</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Trading Data Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Balance</h2>
              <p className="text-xl font-bold text-blue-800">${balance}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Equity</h2>
              <p className="text-xl font-bold text-green-800">${equity}</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Free Margin</h2>
              <p className="text-xl font-bold text-yellow-800">${freeMargin}</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Free Margin Drawdown</h2>
              <p className="text-xl font-bold text-red-800">
                {freeMarginDrawdown}%
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Margin</h2>
              <p className="text-xl font-bold text-purple-800">${margin}</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Margin Level</h2>
              <p className="text-xl font-bold text-indigo-800">
                {marginLevel}%
              </p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Margin Percent</h2>
              <p className="text-xl font-bold text-pink-800">
                {marginPercent}%
              </p>
            </div>
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
            <div className="p-4 bg-orange-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Profit</h2>
              <p className="text-xl font-bold text-orange-800">${profit}</p>
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
          </div>
        </div>
        {/* <div className="flex items-center justify-between w-full font-medium">
          <h2 className="text-lg -mb-1.5">Equity</h2>
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
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Profit
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-muted-foreground">
              {profit}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <Scale className="w-4 h-4" />
                <span>Balance</span>
              </div>
              <span className="text-muted-foreground">
                {balance?.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <MdShowChart className="w-4 h-4" />
                <span>Start Balance Draw Down</span>
              </div>
              <span className="text-muted-foreground">
                {startBalanceDrawdown}
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <ArrowBigUpDash className="w-4 h-4" />
                <span>Max Balance Equity </span>
              </div>
              <span className="text-muted-foreground">{maxBalanceEquity}</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <ArrowBigDownDash className="w-4 h-4" />
                <span>Min Balance Equity </span>
              </div>
              <span className="text-muted-foreground">{minBalanceEquity}</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2">
                <MdShowChart className="w-4 h-4" />
                <span>RelativeDrawdown</span>
              </div>
              <span className="text-muted-foreground">{relativeDrawdown}</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex w-full items-center justify-between text-xs font-medium">
              <div className="">Margin</div>
              <div>
                <span className="mr-1">{margin}</span> ({marginPercent}%)
              </div>
            </div>
            <Progress value={marginPercent} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Free Margin
              </CardTitle>
              <CardDescription>{freeMargin}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 truncate">
                Margin Drawdown
              </CardTitle>
              <CardDescription>{freeMarginDrawdown}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Margin Level
              </CardTitle>
              <CardDescription>{marginLevel.toFixed(4)}</CardDescription>
            </CardHeader>
          </Card>
        </div> */}
      </CardContent>
    </Card>
  );
}
