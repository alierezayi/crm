import api from "@/configs/api";
import { LoginFormType } from "@/lib/types";

interface LoginResponse {
  res?: any;
  error?: any;
}

export const loginAPI = async (data: LoginFormType): Promise<LoginResponse> => {
  try {
    const response = await api.post(
      "http://95.217.228.239:5000/api/Admin/login",
      data
    );

    return { res: response };
  } catch (error) {
    console.error("Login error:", error);

    return { error };
  }
};

export const login2FaAPI = async (data: any) => {
  try {
    const response = await api.get("api/Admin/login-2fa");
    return { response };
  } catch (error) {
    return { error };
  }
};

export const registerAPI = async (data: any) => {
  try {
    const response = await api.post("api/Admin/register", data);
    return { response };
  } catch (error) {
    return { error };
  }
};

export const logoutAPI = async (data: any) => {
  try {
    const response = await api.get("api/Admin/logout");
    return { response };
  } catch (error) {
    return { error };
  }
};
