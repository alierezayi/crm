import { HistoryChartType } from "./types";

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