import MainTabs from "@/components/routes/analyze/tabs";
import SearchBar from "@/components/routes/analyze/search-bar";
import AnalyzeProviders from "./providers";
import UserInfo from "@/components/routes/analyze/user-info";

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnalyzeProviders>{children}</AnalyzeProviders>;
}
