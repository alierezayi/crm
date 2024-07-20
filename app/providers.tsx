"use client";

import * as React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sooner";
import ReactQueryProvider from "@/providers/react-query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import SidebarProvider from "@/context/sidebar-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <main>{children}</main>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}
