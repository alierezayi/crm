import { ChartDrawdownType, HistoryChartType } from "./types";
type MinMaxType = {
  min: number;
  max: number;
};

export const mergeCharts = (
  balanceArray: HistoryChartType[],
  growthArray: HistoryChartType[]
) => {
  const data: any = [];

  balanceArray?.forEach((balanceEntry) => {
    const growthEntry = growthArray.find((g) => g.time === balanceEntry.time);
    if (growthEntry) {
      data.push({
        time: balanceEntry.time,
        balance: balanceEntry.balance,
        growth: growthEntry.balance,
      });
    }
  });

  return data;
};

export const getOverallMinMax = (data: ChartDrawdownType[]) => {
  let overallMin = Infinity;
  let overallMax = -Infinity;

  data?.forEach((item) => {
    const values = [
      item.balance,
      item.minEquity,
      item.maxEquity,
      item.startBalance,
      item.eodBalance,
      item.matBalance,
      item.mdBalance,
    ];

    const min = Math.min(...values);
    const max = Math.max(...values);

    if (min < overallMin) overallMin = min;
    if (max > overallMax) overallMax = max;
  });

  return {
    overallMin,
    overallMax,
  };
};

export function getMinMaxValues(data: ChartDrawdownType[]) {
  let overallMin = Infinity;
  let overallMax = -Infinity;

  data.forEach((entry) => {
    overallMin = Math.min(overallMin, entry.minEquity);
    overallMax = Math.max(overallMax, entry.maxEquity);
  });

  return {
    overallMin,
    overallMax,
  };
}
