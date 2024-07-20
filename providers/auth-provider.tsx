"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { profileAPI } from "@/services/auth";
import { toast } from "sonner";

interface AuthProviderProps {
  children: React.ReactNode;
}

const protectedRouts = ["/main"];

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data, error } = useQuery({
    queryKey: ["profile"],
    queryFn: profileAPI,
  });

  useEffect(() => {
    if (error) {
      toast.error("Error fetching profile", {
        description: error.message,
      });
      return;
    }

    protectedRouts.forEach((route) => {
      if (pathname === route && !data) {
        router.push("/");
      }
      if (pathname !== route && data) {
        router.push("/main");
      }
    });
  }, [pathname, data, router, error]);

  return <React.Fragment>{children}</React.Fragment>;
};
