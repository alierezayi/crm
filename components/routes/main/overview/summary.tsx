import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SummaryType } from "@/lib/types";

function SummaryItem({ item, title }: { item: number; title: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1 text-xs">
        <span>{title}</span>
        {item >= 0 ? (
          <span className="text-green-500">{item?.toFixed(2)}</span>
        ) : (
          <span className="text-red-500">{item?.toFixed(2)}</span>
        )}
      </div>
      <Progress value={+item?.toFixed(0)} />
    </div>
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
    <Card className="w-full flex-1">
      <CardHeader>
        <CardTitle>Sammary</CardTitle>
        <CardDescription>Summery of account</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <SummaryItem title="Sum Profit" item={sumProfit} />
        <SummaryItem title="Sum Commission" item={sumCommission} />
        <SummaryItem title="Sum Deposits" item={sumDeposits} />
        <SummaryItem title="Sum Net Profit" item={sumNetProfit} />
        <SummaryItem title="Sum Swap" item={sumSwap} />
        <SummaryItem title="Sum Withdrawals" item={sumWithdrawals} />
        <SummaryItem title="Start Balance" item={startBalance} />
        <SummaryItem title="Balance Drawdown" item={balanceDrawdown} />
      </CardContent>
    </Card>
  );
}
