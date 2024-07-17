import Footer from "@/containers/footer";
import Header from "@/containers/header";
import Sidebar from "@/containers/sidebar";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="h-full flex-1">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
