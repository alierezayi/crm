import api from "@/configs/api";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

interface ResponseType {
  res?: AxiosResponse;
  error?: AxiosError;
}

export const basicAnalyseAPI = async (code: number): Promise<ResponseType> => {
  try {
    const response = await api.post("PropAccountAnalyze/BasicAnalyze", code);
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};

export const chartDrawdownAnalyzeAPI = async (
  code: number
): Promise<ResponseType> => {
  try {
    const response = await api.post(
      "PropAccountAnalyze/ChartDrawdownAnalyze",
      code
    );
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};

export const historyPositionsAPI = async (
  code: number
): Promise<ResponseType> => {
  try {
    const response = await api.post(
      "PropAccountAnalyze/HistoryPositions",
      code
    );
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};
export const userIPsAPI = async (code: number): Promise<ResponseType> => {
  try {
    const response = await api.post("PropAccountAnalyze/UserIps", code);
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};
