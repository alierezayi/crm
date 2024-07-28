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
import { Badge } from "@/components/ui/badge";
import RadialChart from "./radial-chart";
import DayTrade from "./prop-analyze/day-trade";

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
          {value >= 6 ? (
            <Badge variant="success">Pass</Badge>
          ) : (
            <Badge variant="info">Stable</Badge>
          )}
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 ">
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
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-3">
      <DayTrade value={dayTrade} />
      {/* <Card className="w-full">
        <CardHeader className="pb-5">
          <CardTitle className="flex justify-between items-center">
            <span className="rounded-full text-lg">
              <MdDoneAll />
            </span>
            {dayTradeCompleteVolume >= 6 ? (
              <Badge variant="success">Pass</Badge>
            ) : (
              <Badge variant="info">Stable</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 ">6 day complete lot</CardContent>
      </Card>
      <PropAnalyzeItem
        icon={<CgPerformance />}
        title="Limit Volume"
        value={limitVolume}
      />
      <PropAnalyzeItem
        icon={<MdOutlineAccessTime />}
        title="Trade Limit Time"
        value={tradeLimitTime}
      /> */}
    </div>
  );
}
