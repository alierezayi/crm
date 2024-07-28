import AnalyzeProviders from "./providers";

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnalyzeProviders>{children}</AnalyzeProviders>;
}
