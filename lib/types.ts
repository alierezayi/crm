export type LoginFormType = {
  email: string;
  password: string;
};

export type SummaryType = {
  balanceDrawdown: number;
  startBalance: number;
  sumCommission: number;
  sumDeposits: number;
  sumNetProfit: number;
  sumProfit: number;
  sumSwap: number;
  sumWithdrawals: number;
};

export type HistoryChartType = {
  time: string;
  balance: number;
};

export type ChartDrawdownType = {
  time: string;
  balance: number;
  minEquity: number;
  maxEquity: number;
  startBalance: number;
  eodBalance: number;
  matBalance: number;
  mdBalance: number;
};

export type ShowChartDrawdownType = {
  fixStartRole: number;
  fixEODRole: number;
  fixMATRole: number;
  fixMDRole: number;
  perStartRole: number;
  perEODRole: number;
  perMDRole: number;
  perMATRole: number;
};

export type ChartDrawdownAnalyzeType = {
  maxFloatingDrawdown: number;
  maxFloatingDrawdownTime: string;
  maxStartBalanceDrawdown: number;
  maxStartBalanceDrawdownTime: string;
  maxAllTimeBalanceDrawdown: number;
  maxAllTimeBalanceDrawdownTime: string;
  maxDayBalanceDrawdown: number;
  maxDayBalanceDrawdownTime: string;
  maxEODBalanceDrawdown: number;
  maxEODBalanceDrawdownTime: string;
  chartDrawdown: ChartDrawdownType[];
  showChartDrawdown: ShowChartDrawdownType;
};

export type PositionsAndOrdersType = {
  ticket: number;
  symbol: string;
  type: number;
  typeString: string | null;
  volume: number;
  openPrice: number;
  openTime: string;
  stopLoss: number;
  takeProfit: number;
  nowPrice: number;
  closePrice: number;
  closeTime: string;
  swap: number;
  profit: number;
  commission: number;
  positionDuration: string;
  reason: number;
};

export type NowStatusType = {
  equity: number;
  balance: number;
  margin: number;
  marginPercent: number;
  freeMargin: number;
  freeMarginDrawdown: number;
  marginLevel: number;
  profit: number;
  startBalanceDrawdown: number;
  relativeDrawdown: number;
  minBalanceEquity: number;
  maxBalanceEquity: number;
};

export type UserInfoType = {
  login: number;
  name: string;
  eMail: string;
  isProp: boolean;
};
export type UserIPsType = {
  login: number;
  ipAddress: string;
  type: string;
  build: number;
  time: string;
  computerID: string;
  mqid: string;
};

export type PropAnalyzeType = {
  dayTrade: number;
  dayTradeCompleteVolume: number;
  limitVolume: number;
  tradeLimitTime: number;
  relativeDrawdown: number;
};

export type TradeStatusType = {
  countTrades: number;
  countProfitTrades: number;
  countProfitTradesPercentage: number;
  countLossTrades: number;
  countLossTradesPercentage: number;
  profitFactor: number;
  countMobileTrading: number;
  countMobileTradingPercentage: number;
  countClientTrading: number;
  countClientTradingPercentage: number;
  countWebTrading: number;
  countWebTradingPercentage: number;
  countAlgoTrading: number;
  countAlgoTradingPercentage: number;
  countDayTrade: number;
};

export type HistoryPosition = {
  ticket: number;
  symbol: string;
  openTime: string;
  type: string;
  volume: number;
  nowPrice: number;
  closeTime: string;
  closePrice: number;
  commission: number;
  swap: number;
  profit: number;
  reason: string;
  positionDuration: string;
  stopLoss?: number;
  takeProfit?: number;
  openPrice?: number;
};
