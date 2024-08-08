import { historyPositionsAPI } from "@/services/analyze";
import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";

type StateType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type HistoryPositionsContextType = {
  data: any;
  isLoading: boolean;
  error: AxiosError;
  fetchData: (code: number) => void;
};

const HistoryPositionsContext =
  createContext<HistoryPositionsContextType | null>(null);

const HistoryPositionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    data: undefined,
    error: undefined,
  });

  const fetchData = async (code: number) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    const { res, error } = await historyPositionsAPI(code);

    if (res) {
      setState({ isLoading: false, data: res.data, error: null });
    } else if (error) {
      setState({ isLoading: false, data: undefined, error });
    }

    setState((prev) => ({ ...prev, isLoading: false }));
  };

  return (
    <HistoryPositionsContext.Provider value={{ ...state, fetchData }}>
      {children}
    </HistoryPositionsContext.Provider>
  );
};

export default HistoryPositionsProvider;

export function useHistoryPositions() {
  const context = useContext(HistoryPositionsContext);

  if (context === null) {
    throw new Error(
      "useHistoryPositions must be used within an HistoryPositionsProvider"
    );
  }

  return context;
}
