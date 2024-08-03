"use client";

import Error from "@/containers/error";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { useHistoryPositions } from "@/context/history-positions-context";
import { useEffect } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { HistoryPosition } from "@/lib/types";
import { DataTable } from "@/components/routes/analyze/history-positions/data-table";
import { columns } from "@/components/routes/analyze/history-positions/columns";

export default function HistoryPositionsContent() {
  const router = useRouter();

  const { data, isLoading, error } = useHistoryPositions();

  useEffect(() => {
    if (error?.response?.status === 401) {
      toast.error("Token Expired", {
        description: "Logging out of account.",
      });
      Cookies.remove("token");
      router.push("/");
    }
  }, [error]);

  // console.log(data);
  const newData = data?.map((item: HistoryPosition) => {
    const dateOpenTime = item.openTime.split("T")[0];
    const timeOpenTime = item.openTime.split("T")[1].split(".")[0];
    const dateCloseTime = item.closeTime.split("T")[0];
    const timeCloseTime = item.closeTime.split("T")[1].split(".")[0];

    const newOpenTime = `${dateOpenTime} ${timeOpenTime}`;
    const newCloseTime = `${dateCloseTime} ${timeCloseTime}`;
    const newDuration = item.positionDuration.split(".")[0];

    return {
      ...item,
      positionDuration: newDuration,
      openTime: newOpenTime,
      closeTime: newCloseTime,
    };
  });
  console.log(newData);

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          {error && error?.response?.status !== 400 && (
            <Error message="Unexpected error." />
          )}
          {error?.response?.status === 400 && <div>User not founded.</div>}
          {newData && <DataTable columns={columns} data={newData} />}
        </>
      )}
    </>
  );
}
