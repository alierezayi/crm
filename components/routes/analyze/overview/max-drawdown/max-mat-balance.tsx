"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useChartDrawdown } from "@/context/chart-drawdown-context";
import { ChartColumnIncreasing } from "lucide-react";
import MaxDrawdownProgress from "./max-drawdown-progress";

export default function MaxMATBalance() {
  const { data, isLoading } = useChartDrawdown();

  const value = data?.maxAllTimeBalanceDrawdown! * 100;
  const date = new Date(data?.maxAllTimeBalanceDrawdownTime as any);
  const perMATRole = data?.showChartDrawdown.perMATRole!;

  return (
    <Card className="w-full h-[137.5px]">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ChartColumnIncreasing className="w-4 h-4" />
            MAT balance max drawdown
          </div>
          <Badge variant="secondary">None</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            Loading ...
          </div>
        ) : (
          <>
            <MaxDrawdownProgress role={20} value={value} />
            <CardDescription className="flex justify-between gap-2 w-full mt-5 text-xs truncate">
              <div>{value.toFixed(2)}% drawdown</div>
              <div className="">{date.toLocaleString()}</div>
            </CardDescription>
          </>
        )}
      </CardContent>
    </Card>
  );
}
