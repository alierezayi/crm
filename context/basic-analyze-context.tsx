import { basicAnalyseAPI } from "@/services/prop-account-analyze";
import { createContext, useContext, useEffect, useState } from "react";

type StateType = {
  isLoading: boolean;
  data: any;
  error: string | null;
};

type BasicAnalyzeContextType = {
  data: any;
  isLoading: boolean;
  error: string | null;
};

const BasicAnalyzeContext = createContext<BasicAnalyzeContextType | null>(null);

const BasicAnalyzeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    data: undefined,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, isLoading: true }));

      const { res, error } = await basicAnalyseAPI(87782);

      if (res) {
        setState({ isLoading: false, data: res.data, error: null });
      } else if (error) {
        setState({ isLoading: false, data: undefined, error: error.message });
      }

      setState((prev) => ({ ...prev, isLoading: false }));
    };
    fetchData();
  }, []);

  return (
    <BasicAnalyzeContext.Provider value={{ ...state }}>
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
