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

export default function MaxStartBalance() {
  const { data, isLoading, error } = useChartDrawdown();
  console.log(data);

  const value = data?.maxStartBalanceDrawdown! * 100;

  const date = `${data?.maxStartBalanceDrawdownTime.split("T")[0]} ${
    data?.maxStartBalanceDrawdownTime.split("T")[1].split("Z")[0]
  }`;

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
                <Progress
                  className={cn(
                    value! >= perStartRole! ? "bg-rose-600" : "bg-blue-600"
                  )}
                  value={value * perStartRole}
                />
                <CardDescription className="flex justify-between gap-2 w-full mt-5 text-xs">
                  <div>{value}% drawdown</div>
                  <div>{date}</div>
                </CardDescription>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
