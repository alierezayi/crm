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
import MaxDrawdownProgress from "./max-drawdown-progress";

export default function MaxMDBalance() {
  const { data, isLoading } = useChartDrawdown();

  const value = data?.maxDayBalanceDrawdown! * 100;
  const date = new Date(data?.maxDayBalanceDrawdownTime as any);
  const perMDRole = data?.showChartDrawdown.perMDRole!;

  return (
    <Card className="w-full h-[137.5px]">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ChartColumnIncreasing className="w-4 h-4" />
            MD balance max drawdown
          </div>
          {!isLoading && (
            <>
              {value >= perMDRole ? (
                <Badge variant="danger">Rejected</Badge>
              ) : (
                <Badge variant="info">Stable</Badge>
              )}
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            Loading ...
          </div>
        ) : (
          <>
            <MaxDrawdownProgress
              role={perMDRole}
              value={value}
            />
            <CardDescription className="flex justify-between gap-2 w-full mt-5 text-xs">
              <div>{value.toFixed(2)}% drawdown</div>
              <div className="">{date.toLocaleString()}</div>
            </CardDescription>
          </>
        )}
      </CardContent>
    </Card>
  );
}
