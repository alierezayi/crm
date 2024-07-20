import api from "@/configs/api";

export const basicAnalyseAPI = (data: number) =>
  api.post("PropAccountAnalyze/BasicAnalyze", data);
