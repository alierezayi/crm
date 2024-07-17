import api from "@/configs/api";
import { LoginFormType } from "@/lib/types";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

interface LoginResponse {
  res?: AxiosResponse;
  error?: AxiosError;
}

export const loginAPI = async (data: LoginFormType): Promise<LoginResponse> => {
  try {
    const response = await api.post("api/Admin/login", data);

    return { res: response };
  } catch (error) {
    console.error("Login error:", error);

    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};

export const logoutAPI = async (): Promise<LoginResponse> => {
  try {
    const response = await api.get("api/Admin/logout");

    return { res: response };
  } catch (error) {
    console.error("Login error:", error);

    if (isAxiosError(error)) {
      return { error };
    } else {
      throw error;
    }
  }
};
