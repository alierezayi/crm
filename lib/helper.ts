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

export const subtract = (value: number, digit: number) => {
  if (value) {
    let numberStr = value.toString();

    // Split the string into integer and decimal parts
    let parts = numberStr.split(".");
    let integerPart = parts[0];
    let decimalPart = parts[1] || ""; // Handle case where there's no decimal part

    // Subtract 2 digits from the decimal part
    let newDecimalPart = decimalPart.slice(digit);

    // Combine the integer part and the modified decimal part
    let newNumberStr = integerPart + "." + newDecimalPart;
    let newNumber = parseFloat(newNumberStr);

    return newNumber;
  }
};
