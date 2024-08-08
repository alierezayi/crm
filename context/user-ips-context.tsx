import { UserIPsType } from "@/lib/types";
import { userIPsAPI } from "@/services/analyze";
import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";

type StateType = {
  isLoading: boolean;
  data: UserIPsType[] | undefined;
  error: any;
};

type UserIPsContextType = {
  data: UserIPsType[] | undefined;
  isLoading: boolean;
  error: AxiosError;
  fetchData: (code: number) => void;
};

const UserIPsContext = createContext<UserIPsContextType | null>(null);

const UserIPsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    data: undefined,
    error: undefined,
  });

  const fetchData = async (code: number) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    const { res, error } = await userIPsAPI(code);

    if (res) {
      setState({ isLoading: false, data: res.data, error: null });
    } else if (error) {
      setState({ isLoading: false, data: undefined, error });
    }

    setState((prev) => ({ ...prev, isLoading: false }));
  };

  return (
    <UserIPsContext.Provider value={{ ...state, fetchData }}>
      {children}
    </UserIPsContext.Provider>
  );
};

export default UserIPsProvider;

export function useUserIPs() {
  const context = useContext(UserIPsContext);

  if (context === null) {
    throw new Error("useUserIPs must be used within an UserIPsProvider");
  }

  return context;
}
