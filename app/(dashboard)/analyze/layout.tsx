import MainTabs from "@/components/routes/analyze/tabs";
import SearchBar from "@/components/routes/analyze/overview/search-bar";
import AnalyzeProviders from "./providers";
import UserInfo from "@/components/routes/analyze/user-info";

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalyzeProviders>
      <div className="flex flex-col md:flex-row md:justify-between gap-y-5 md:items-center md:mb-0 py-5">
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 md:items-center">
          <SearchBar />
          <UserInfo />
        </div>
        <MainTabs />
      </div>
      {children}
    </AnalyzeProviders>
  );
}
