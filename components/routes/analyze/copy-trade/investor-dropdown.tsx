import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getInvestorsAPI } from "@/services/copy-trade";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export default function InvestorDropdown({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["investors"],
    queryFn: getInvestorsAPI,
  });

  const investors = data?.data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isLoading} asChild className="w-full ml-0">
        <Button variant="outline" className="ml-auto">
          {isLoading ? "loading ..." : value || "Select Investor"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full min-w-72">
        <DropdownMenuLabel>Investors</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {investors?.length ? (
            <>
              <DropdownMenuRadioItem value="">none</DropdownMenuRadioItem>
              {investors.map((code: number) => (
                <DropdownMenuRadioItem key={code} value={code.toString()}>
                  {code}
                </DropdownMenuRadioItem>
              ))}
            </>
          ) : null}
          {error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : null}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
