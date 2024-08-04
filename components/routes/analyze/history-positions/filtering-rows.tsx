import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { DatePicker } from "./date-picker";
import { useState } from "react";

export default function FilteringRows() {
  const [openTime, setOpenTime] = useState<Date>();
  return (
    <TableRow>
      <TableCell className="p-1.5">
        <Input type="number" placeholder="" className="" />
      </TableCell>
      <TableCell className="py-1.5">
        <Input type="number" placeholder="" className="w-[70px]" />
      </TableCell>
      <TableCell className="py-1.5">
        <DatePicker date={openTime} onChange={setOpenTime} />
      </TableCell>
      <TableCell className="py-1.5">
        <Input type="number" placeholder="" className="w-[70px]" />
      </TableCell>
    </TableRow>
  );
}
