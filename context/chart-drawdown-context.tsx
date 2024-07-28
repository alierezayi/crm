import { ChartDrawdownAnalyzeType } from "@/lib/types";
import { chartDrawdownAnalyzeAPI } from "@/services/prop-account-analyze";
import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";

type StateType = {
  isLoading: boolean;
  data: ChartDrawdownAnalyzeType | undefined;
  error: any;
};

type ChartDrawdownContextType = {
  data: ChartDrawdownAnalyzeType | undefined;
  isLoading: boolean;
  error: AxiosError;
  fetchData: (code: number) => void;
};

const ChartDrawdownContext = createContext<ChartDrawdownContextType | null>(
  null
);

const ChartDrawdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    data: undefined,
    error: undefined,
  });

  const fetchData = async (code: number) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    const { res, error } = await chartDrawdownAnalyzeAPI(code);

    if (res) {
      setState({ isLoading: false, data: res.data, error: null });
    } else if (error) {
      setState({ isLoading: false, data: undefined, error });
    }

    setState((prev) => ({ ...prev, isLoading: false }));
  };

  return (
    <ChartDrawdownContext.Provider value={{ ...state, fetchData }}>
      {children}
    </ChartDrawdownContext.Provider>
  );
};

export default ChartDrawdownProvider;

export function useChartDrawdown() {
  const context = useContext(ChartDrawdownContext);

  if (context === null) {
    throw new Error(
      "useChartDrawdown must be used within an ChartDrawdownProvider"
    );
  }

  return context;
}
