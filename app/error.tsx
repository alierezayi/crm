"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import ErrorContainer from "@/containers/error";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center">
      <ErrorContainer message={error.message} />
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
