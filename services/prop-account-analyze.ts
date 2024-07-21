import api from "@/configs/api";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

interface ResponseType {
  res?: AxiosResponse;
  error?: AxiosError;
}

export const basicAnalyseAPI = async (data: number): Promise<ResponseType> => {
  try {
    const response = await api.post("PropAccountAnalyze/BasicAnalyze", data);
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};
