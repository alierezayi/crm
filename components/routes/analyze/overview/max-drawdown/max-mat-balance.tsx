"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useChartDrawdown } from "@/context/chart-drawdown-context";
import { cn } from "@/lib/utils";
import { ChartColumnIncreasing } from "lucide-react";

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
            <Progress
              className={cn(
                value! >= perMATRole! ? "bg-rose-600" : "bg-blue-600"
              )}
              value={value * perMATRole}
            />
            <CardDescription className="flex justify-between gap-2 w-full mt-5 text-xs">
              <div>{value}% drawdown</div>
              <div className="">{date.toLocaleString()}</div>
            </CardDescription>
          </>
        )}
      </CardContent>
    </Card>
  );
}
