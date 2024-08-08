import { UserIPsType } from "@/lib/types";
import { TableCell, TableRow } from "@/components/ui/table";

export default function UserIPsTableRows({ data }: { data: UserIPsType[] }) {
  return (
    <>
      {data.map(
        ({ login, ipAddress, type, build, time, computerID, mqid }, i) => (
          <TableRow key={i}>
            <TableCell>{login}</TableCell>
            <TableCell>{ipAddress}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{build}</TableCell>
            <TableCell>{new Date(time).toLocaleString()}</TableCell>
            <TableCell>{computerID}</TableCell>
            <TableCell>{mqid}</TableCell>
          </TableRow>
        )
      )}
    </>
  );
}
