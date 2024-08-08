"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import InvestorDropdown from "./investor-dropdown";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { useMutation } from "@tanstack/react-query";
import { addAPI } from "@/services/copy-trade";
import { toast } from "sonner";

export default function CopyTradeAction() {
  const { data } = useBasicAnalyze();

  const coefficient = 1;
  const login = data?.user.login;
  const [selectedInvestor, setSelectedInvestor] = useState("");
  const [isReverse, setIsReverse] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationKey: ["copy-trade"],
    mutationFn: addAPI,
    onSuccess: () => {
      setSelectedInvestor("");
      setIsReverse(false);
      toast.success("Copy trade added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAddCopyTrade = () => {
    if (selectedInvestor) {
      mutate({
        Login: login,
        Investor: +selectedInvestor,
        Coefficient: coefficient,
        Reverse: isReverse,
      });
    }
  };

  return (
    <div className="">
      <Popover modal>
        <PopoverTrigger asChild>
          <Button variant="secondary">Copy Trade</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 flex flex-col gap-y-5" align="end">
          <div className="">
            <Label htmlFor="investor" className="text-muted-foreground">
              Select Investor
            </Label>
            <InvestorDropdown
              value={selectedInvestor}
              onValueChange={setSelectedInvestor}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="reverce-investors"
              checked={isReverse}
              onCheckedChange={(state: boolean) => setIsReverse(state)}
            />
            <Label
              htmlFor="reverce-investors"
              className="text-muted-foreground"
            >
              Reverce positions <span className="text-xs">(optional)</span>
            </Label>
          </div>
          <Button
            variant="default"
            onClick={handleAddCopyTrade}
            disabled={isPending}
          >
            {isPending ? "loading ..." : "Add Copy Trade"}
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
