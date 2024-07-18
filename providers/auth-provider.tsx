import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/context/session-context";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/"); // Redirect if not authenticated
    }
  }, [session, router]);

  return <React.Fragment>{children}</React.Fragment>;
};
