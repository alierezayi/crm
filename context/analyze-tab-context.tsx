import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type ActiveTabType = "Overview" | "History Positions" | "User IPs";

type AnalyzeTabContextType = {
  activeTab: ActiveTabType;
  setActiveTab: Dispatch<SetStateAction<ActiveTabType>>;
};

const AnalyzeTabContext = createContext<AnalyzeTabContextType | null>(null);

// const OVERVIEW = "Overview";
// const HISTORY_POSITION = "History Position";
// const USER_IPS = "User IPs";

const AnalyzeTabProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Overview");

  return (
    <AnalyzeTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AnalyzeTabContext.Provider>
  );
};

export default AnalyzeTabProvider;

export function useAnalyzeTab() {
  const context = useContext(AnalyzeTabContext);

  if (context === null) {
    throw new Error("useAnalyzeTab must be used within an AnalyzeTabProvider");
  }

  return context;
}
