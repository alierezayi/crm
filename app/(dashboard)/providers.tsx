"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function DashboardProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = Cookies.get("token");

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  return <React.Fragment>{children}</React.Fragment>;
}
