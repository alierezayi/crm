import api from "@/configs/api";
import { LoginFormType } from "@/lib/types";

export const sendLoginData = async (data: LoginFormType) => {
  try {
    const response = await api.get("api/Admin/login");
    return { response };
  } catch (error) {
    return { error };
  }
};
