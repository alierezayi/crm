"use client";

import * as React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sooner";
import SessionProvider from "@/context/session-context";
import { AuthProvider } from "@/providers/auth-provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {/* <AuthProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      {/* </AuthProvider> */}
    </SessionProvider>
  );
}
