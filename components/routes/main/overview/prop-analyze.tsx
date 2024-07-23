import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropAnalyzeType } from "@/lib/types";
import { LuCalendarDays } from "react-icons/lu";
import { MdDoneAll } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { Info } from "lucide-react";

function PropAnalyzeItem({
  icon,
  value,
  title,
}: {
  value: number;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-5">
        <CardTitle className="flex justify-between items-center">
          <span className="rounded-full text-lg">{icon}</span>
          <Info className="w-4 h-4 text-gray-500" />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 font-medium">
        <span>{value}</span>
        {title}
      </CardContent>
    </Card>
  );
}

export default function PropAnalyze({
  dayTrade,
  dayTradeCompleteVolume,
  limitVolume,
  tradeLimitTime,
}: PropAnalyzeType) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
      <PropAnalyzeItem
        icon={<LuCalendarDays />}
        title="Day Trade"
        value={dayTrade}
      />
      <PropAnalyzeItem
        icon={<MdDoneAll />}
        title="Complete Volume"
        value={dayTradeCompleteVolume}
      />
      <PropAnalyzeItem
        icon={<CgPerformance />}
        title="Limit Volume"
        value={limitVolume}
      />
      <PropAnalyzeItem
        icon={<MdOutlineAccessTime />}
        title="Trade Limit Time"
        value={tradeLimitTime}
      />
    </div>
  );
}
