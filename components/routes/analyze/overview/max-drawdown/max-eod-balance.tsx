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
import { ChartColumnIncreasingIcon } from "lucide-react";

export default function MaxEODBalance() {
  const { data, isLoading, error } = useChartDrawdown();

  const value = data?.maxEODBalanceDrawdown! * 100;
  const date = new Date(data?.maxEODBalanceDrawdownTime as any);
  const perEODRole = data?.showChartDrawdown.perEODRole!;

  return (
    <Card className="w-full h-[137.5px]">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ChartColumnIncreasingIcon className="w-4 h-4" />
            EOD balance max drawdown
          </div>
          {data && (
            <>
              {value >= perEODRole ? (
                <Badge variant="danger">Rejected</Badge>
              ) : (
                <Badge variant="info">Stable</Badge>
              )}
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            Loading ...
          </div>
        ) : (
          <>
            {error && (
              <div className="w-full h-full flex justify-center items-center">
                No result.
              </div>
            )}
            {data && (
              <>
                <Progress
                  className={cn(
                    value! >= perEODRole! ? "bg-rose-600" : "bg-blue-600"
                  )}
                  value={value * perEODRole}
                />
                <CardDescription className="flex justify-between gap-2 w-full mt-5 text-xs">
                  <div>{value}% drawdown</div>
                  <div>{date.toLocaleString()}</div>
                </CardDescription>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
