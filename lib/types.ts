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

export type PositionsAndOrdersType = {
  ticket: number;
  symbol: string;
  type: number;
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

export type PropAnalyzeType = {
  dayTrade: number;
  dayTradeCompleteVolume: number;
  limitVolume: number;
  tradeLimitTime: number;
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
