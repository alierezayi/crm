import UserIPsTableRows from "@/components/templates/tables/user-ips-table-rows";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserIPsType } from "@/lib/types";

export default function TableContainer({ data }: { data: UserIPsType[] }) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Login</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Build</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Computer ID</TableHead>
            <TableHead>mqid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={12} className="text-center py-4">
                No data available.
              </TableCell>
            </TableRow>
          ) : null}
          <UserIPsTableRows data={data} />
        </TableBody>
      </Table>
    </Card>
  );
}
