"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const MaxDrawdownProgress = ({
  value,
  role,
}: {
  className?: string;
  value: number;
  role: number;
}) => {
  const result = 100 / role;

  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/10"
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all",
          value! >= role! ? "bg-rose-600" : "bg-blue-600"
        )}
        style={{ transform: `translateX(-${100 - (value * result || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

export default MaxDrawdownProgress;
