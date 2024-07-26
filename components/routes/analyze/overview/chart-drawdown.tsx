"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { chartDrawdownAnalyzeAPI } from "@/services/prop-account-analyze";
import { ChartArea } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChartDrawdown({ loginCode }: { loginCode: number }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { res, error } = await chartDrawdownAnalyzeAPI(loginCode);
      console.log(res);

      setData(res?.data);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartArea className="w-4" />
          Chart Drawdown
        </CardTitle>
        <CardDescription>Chart Drawdown</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
