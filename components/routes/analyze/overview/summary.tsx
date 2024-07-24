import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { SummaryType } from "@/lib/types";
import { LayoutList, TrendingDown, TrendingUp } from "lucide-react";

function SummaryItem({ item, title }: { item: number; title: string }) {
  return (
    <>
      <div className="flex items-center justify-between mb-1 mr-0.5 text-xs font-medium">
        <span>{title}</span>
        {item >= 0 ? (
          <span className="text-emerald-600 dark:text-emerald-400 flex gap-2 items-center">
            {item?.toFixed(2)} <TrendingUp className="w-3.5 h-3.w-3.5" />
          </span>
        ) : (
          <span className="text-rose-600 dark:text-rose-400 flex gap-2 items-center">
            {item?.toFixed(2)} <TrendingDown className="w-3.5 h-3.w-3.5" />
          </span>
        )}
      </div>
    </>
  );
}

export default function Summary({
  balanceDrawdown,
  startBalance,
  sumCommission,
  sumDeposits,
  sumNetProfit,
  sumProfit,
  sumSwap,
  sumWithdrawals,
}: SummaryType) {
  return (
    <Card className="lg:col-span-4 xl:col-span-2 2xl:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LayoutList className="w-4" />
          Sammary
        </CardTitle>

        <CardDescription>Summery of account</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <SummaryItem title="Sum Profit" item={sumProfit} />
        <Separator />
        <SummaryItem title="Sum Commission" item={sumCommission} />
        <Separator />
        <SummaryItem title="Sum Deposits" item={sumDeposits} />
        <Separator />
        <SummaryItem title="Sum Net Profit" item={sumNetProfit} />
        <Separator />
        <SummaryItem title="Sum Swap" item={sumSwap} />
        <Separator />
        <SummaryItem title="Sum Withdrawals" item={sumWithdrawals} />
        <Separator />
        <SummaryItem title="Start Balance" item={startBalance} />
        <Separator />
        <SummaryItem title="Balance Drawdown" item={balanceDrawdown} />
      </CardContent>
    </Card>
  );
}
