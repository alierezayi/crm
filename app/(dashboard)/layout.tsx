import Footer from "@/containers/footer";
import Header from "@/containers/header";
import Sidebar from "@/containers/sidebar";
import DashboardProviders from "./providers";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProviders>
      <div className="flex flex-row min-h-screen relative">
        <Sidebar />
        <div className="h-full flex-1">
          <Header />
          <main className="flex-1 px-2 md:px-5 h-[calc(100vh-56px)] overflow-y-auto scrollbar">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </DashboardProviders>
  );
}
