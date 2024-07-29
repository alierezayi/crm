"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const CountTradingProgress = ({
  className,
  profit,
}: {
  className?: string;
  profit: number;
}) => (
  <ProgressPrimitive.Root
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-red-500"
    )}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-green-500 transition-all",
        className
      )}
      style={{ transform: `translateX(-${100 - (profit || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
);

export default CountTradingProgress;
