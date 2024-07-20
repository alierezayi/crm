import api from "@/configs/api";
import { LoginFormType } from "@/lib/types";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

interface ResponseType {
  res?: AxiosResponse;
  error?: AxiosError;
}

export const loginAPI = async (data: LoginFormType): Promise<ResponseType> => {
  try {
    const response = await api.post("api/Admin/login", data);
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};

export const profileAPI = () =>
  api.get("api/Admin/profile").then((res) => res || false);

export const logoutAPI = async (): Promise<ResponseType> => {
  try {
    const response = await api.get("api/Admin/logout");
    return { res: response };
  } catch (error) {
    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};
