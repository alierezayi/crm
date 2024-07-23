import MainTabs from "@/components/routes/main/tabs";
import UserInfo from "@/components/routes/main/user-info";
import MainProviders from "./providers";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainProviders>
      <div className="flex flex-col md:flex-row justify-between gap-y-5 md:items-center md:mb-0 py-5">
        <UserInfo />
        <MainTabs />
      </div>
      {children}
    </MainProviders>
  );
}
