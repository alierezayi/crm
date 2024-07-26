import MainTabs from "@/components/routes/analyze/tabs";
import SearchBar from "@/components/routes/analyze/overview/search-bar";
import AnalyzeProviders from "./providers";

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalyzeProviders>
      <div className="flex flex-col md:flex-row justify-between gap-y-5 md:items-center md:mb-0 py-5">
        <SearchBar />
        <MainTabs />
      </div>
      {children}
    </AnalyzeProviders>
  );
}
