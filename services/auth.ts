import api from "@/configs/api";

export const loginAPI = async (data: any) => {
  try {
    const response = await api.get("api/Admin/login");
    return { response };
  } catch (error) {
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
