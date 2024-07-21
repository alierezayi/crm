import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { NowStatusType } from "@/lib/types";

function NowStatusItem({ item, title }: { item: number; title: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1 text-xs font-medium">
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
    <Card className="w-full flex-1 xl:flex-[2]">
      <CardHeader>
        <CardTitle>Status</CardTitle>
        <CardDescription>Now Status</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col xl:flex-row gap-5">
        <div className="flex flex-col gap-2 w-full">
          <NowStatusItem title="Equity" item={equity} />
          <NowStatusItem title="Balance" item={balance} />
          <NowStatusItem title="Margin" item={margin} />
          <NowStatusItem title="Margin Percent" item={marginPercent} />
          <NowStatusItem title="Margin Level" item={marginLevel} />
          <NowStatusItem title="Free Margin" item={freeMargin} />
          <NowStatusItem
            title="Free Margin Drawdown"
            item={freeMarginDrawdown}
          />
          <NowStatusItem title="Now Profit" item={profit} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <NowStatusItem
            title="Start Balance Drawdown"
            item={startBalanceDrawdown}
          />
          <NowStatusItem title="Relative Drawdown" item={relativeDrawdown} />
          <NowStatusItem title="Min Balance Equity" item={minBalanceEquity} />
          <NowStatusItem title="Max Balance Equity" item={maxBalanceEquity} />
        </div>
      </CardContent>
    </Card>
  );
}
