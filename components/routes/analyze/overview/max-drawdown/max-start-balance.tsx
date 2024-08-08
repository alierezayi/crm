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

export default function MaxStartBalance() {
  const { data, isLoading, error } = useChartDrawdown();

  const value = data?.maxStartBalanceDrawdown! * 100;
  const date = new Date(data?.maxStartBalanceDrawdownTime as any);
  const perStartRole = data?.showChartDrawdown.perStartRole!;

  return (
    <Card className="w-full h-[137.5px]">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ChartColumnIncreasing className="w-4 h-4" />
            Start balance max drawdown
          </div>
          {data && (
            <>
              {value >= perStartRole ? (
                <Badge variant="danger">Rejected</Badge>
              ) : (
                <Badge variant="info">Stable</Badge>
              )}
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        {isLoading ? (
          <div className="flex justify-center items-center">Loading ...</div>
        ) : (
          <>
            {error && (
              <div className="w-full h-full flex justify-center items-center">
                No result.
              </div>
            )}
            {data && (
              <>
                <MaxDrawdownProgress role={perStartRole} value={value} />
                <CardDescription className="flex justify-between gap-2 w-full mt-5 text-xs truncate">
                  <div>{value.toFixed(2)}% drawdown</div>
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
