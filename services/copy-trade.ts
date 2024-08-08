import api from "@/configs/api";

type AddCopyTradeType = {
  Login: number;
  Investor: number;
  Reverse: boolean;
  Coefficient: number;
};

export const addAPI = (data: AddCopyTradeType) =>
  api.post("CopyTradeProp/Add", data);

export const getInvestorsAPI = () => api.get("CopyTradeProp/Investors");
