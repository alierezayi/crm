import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function FilteringRows() {
  const [openTime, setOpenTime] = useState<Date>();
  return (
    <>
      <TableRow>
              <TableCell className="p-1.5">
                <Input
                  type="number"
                  value={table.getColumn("ticket")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("ticket")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="ml-auto">
                      {(table
                        .getColumn("symbol")
                        ?.getFilterValue() as string) || "all"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup
                      value={
                        (table
                          .getColumn("symbol")
                          ?.getFilterValue() as string) || "all"
                      }
                      onValueChange={(value) => {
                        if (value === "all") {
                          table.getColumn("symbol")?.setFilterValue(undefined);
                        } else {
                          table.getColumn("symbol")?.setFilterValue(value);
                        }
                      }}
                    >
                      {["all", "XAUEUR", "XAUUSD", "GBPUSD", "EURUSD"].map(
                        (item) => (
                          <DropdownMenuRadioItem key={item} value={item}>
                            {item}
                          </DropdownMenuRadioItem>
                        )
                      )}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="py-1.5"></TableCell>
              <TableCell className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="ml-auto">
                      {(table.getColumn("type")?.getFilterValue() as string) ||
                        "all"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup
                      value={
                        (table.getColumn("type")?.getFilterValue() as string) ||
                        "all"
                      }
                      onValueChange={(value) => {
                        if (value === "all") {
                          table.getColumn("type")?.setFilterValue(undefined);
                        } else {
                          table.getColumn("type")?.setFilterValue(value);
                        }
                      }}
                    >
                      {["all", "buy", "sell"].map((item) => (
                        <DropdownMenuRadioItem key={item} value={item}>
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={table.getColumn("volume")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("volume")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={
                    table.getColumn("nowPrice")?.getFilterValue() as string
                  }
                  onChange={(event) =>
                    table
                      .getColumn("nowPrice")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5"></TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={
                    table
                      .getColumn("positionDuration")
                      ?.getFilterValue() as string
                  }
                  onChange={(event) =>
                    table
                      .getColumn("positionDuration")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={
                    table.getColumn("commission")?.getFilterValue() as string
                  }
                  onChange={(event) =>
                    table
                      .getColumn("commission")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={table.getColumn("swap")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("swap")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <Input
                  type="number"
                  value={table.getColumn("profit")?.getFilterValue() as string}
                  onChange={(event) =>
                    table
                      .getColumn("profit")
                      ?.setFilterValue(event.target.value.toString())
                  }
                  className=""
                />
              </TableCell>
              <TableCell className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="ml-auto">
                      {(table
                        .getColumn("reason")
                        ?.getFilterValue() as string) || "all"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup
                      value={
                        (table
                          .getColumn("reason")
                          ?.getFilterValue() as string) || "all"
                      }
                      onValueChange={(value) => {
                        if (value === "all") {
                          table.getColumn("reason")?.setFilterValue(undefined);
                        } else {
                          table.getColumn("reason")?.setFilterValue(value);
                        }
                      }}
                    >
                      {["all", "CLIENT", "DEALER"].map((item) => (
                        <DropdownMenuRadioItem key={item} value={item}>
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
    </>
  );
}
