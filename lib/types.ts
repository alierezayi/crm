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
