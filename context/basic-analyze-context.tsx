import { basicAnalyseAPI } from "@/services/analyze";
import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type StateType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type BasicAnalyzeContextType = {
  data: any;
  isLoading: boolean;
  error: AxiosError;
  fetchData: (code: number) => void;
};

const BasicAnalyzeContext = createContext<BasicAnalyzeContextType | null>(null);

const BasicAnalyzeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    data: undefined,
    error: undefined,
  });

  const fetchData = async (code: number) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    const { res, error } = await basicAnalyseAPI(code);

    if (res) {
      setState({ isLoading: false, data: res.data, error: null });
    } else if (error) {
      setState({ isLoading: false, data: undefined, error });
    }

    setState((prev) => ({ ...prev, isLoading: false }));
  };

  return (
    <BasicAnalyzeContext.Provider value={{ ...state, fetchData }}>
      {children}
    </BasicAnalyzeContext.Provider>
  );
};

export default BasicAnalyzeProvider;

export function useBasicAnalyze() {
  const context = useContext(BasicAnalyzeContext);

  if (context === null) {
    throw new Error(
      "useBasicAnalyze must be used within an BasicAnalyzeProvider"
    );
  }

  return context;
}
