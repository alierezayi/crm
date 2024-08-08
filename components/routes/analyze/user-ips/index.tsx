"use client";

import Error from "@/containers/error";
import TableContainer from "@/containers/routes/analyze/user-ips/table-container";
import { useUserIPs } from "@/context/user-ips-context";

export default function UserIPsContent() {
  const { data, isLoading, error } = useUserIPs();
  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          {error && error?.response?.status !== 400 && (
            <Error message={error.message} />
          )}
          {error?.response?.status === 400 && <div>data not founded.</div>}
          {data && <TableContainer data={data} />}
        </>
      )}
    </>
  );
}
