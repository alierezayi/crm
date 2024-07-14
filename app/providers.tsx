"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/containers/header";
import Footer from "@/containers/footer";
import Sidebar from "@/containers/sidebar";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // detect isShow root layout
  const [isShowRootLayout, setIsShowRootLayout] = React.useState<boolean>(() =>
    pathname === "/email-verify" ||
    pathname === "/reset-password" ||
    pathname === "/sign-in"
      ? false
      : true
  );

  React.useEffect(() => {
    setIsShowRootLayout(
      pathname === "/email-verify" ||
        pathname === "/reset-password" ||
        pathname === "/sign-in"
        ? false
        : true
    );
  }, [pathname]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {/* hide root layout for auth pages */}
      {!!isShowRootLayout ? (
        <div className="flex flex-row min-h-screen">
          <Sidebar />
          <div className="h-full flex-1">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      ) : (
        <main>{children}</main>
      )}
    </ThemeProvider>
  );
}
