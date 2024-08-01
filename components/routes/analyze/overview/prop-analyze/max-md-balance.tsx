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

export default function MaxMDBalance() {
  const { data, isLoading } = useChartDrawdown();

  //   const value = data?.maxMDBalanceDrawdown! * 100;

  //   const date = `${data?.maxMDBalanceDrawdownTime.split("T")[0]} ${
  //     data?.maxMDBalanceDrawdownTime.split("T")[1].split("Z")[0]
  //   }`;

  const perMDRole = data?.showChartDrawdown.perMDRole!;

  return (
    <Card className="w-full h-[137.5px]">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ChartColumnIncreasing className="w-4 h-4" />
            MD balance max drawdown
          </div>
          {/* {!isLoading && (
            <>
              {value >= perMDRole ? (
                <Badge variant="danger">Rejected</Badge>
              ) : (
                <Badge variant="info">Stable</Badge>
              )}
            </>
          )} */}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            Loading ...
          </div>
        ) : (
          <>
            {/* <Progress
              className={cn(
                value! >= perMDRole! ? "bg-rose-600" : "bg-blue-600"
              )}
              value={value * perMDRole}
            />
            <CardDescription className="flex justify-between gap-2 w-full mt-5">
              <div>{value}% drawdown</div>
              <div className="">{date}</div>
            </CardDescription> */}
            <div className="flex justify-center items-center h-full">
              No result.
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
