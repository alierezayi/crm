"use client";

import * as React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sooner";
import ReactQueryProvider from "@/providers/react-query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main>{children}</main>
        <Toaster />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
