"use client";

import Error from "@/containers/error";
import { useHistoryPositions } from "@/context/history-positions-context";
import { useEffect } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
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

  console.log(data);

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
          {data && <DataTable columns={columns} data={data} />}
        </>
      )}
    </>
  );
}
