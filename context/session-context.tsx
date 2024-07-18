import { createContext, useContext, useEffect, useState } from "react";
import { decodeJWT } from "@/lib/decodeJWT";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type SessionState = {
  email: string | null;
  role: string | null;
};

type SessionContextType = {
  session: SessionState | null;
  addSession: (token: string) => void;
  removeSession: () => void;
};

type SessionProviderType = {
  children: React.ReactNode;
};

const SessionContext = createContext<SessionContextType | null>(null);

function SessionProvider({ children }: SessionProviderType) {
  const [session, setSession] = useState<SessionState | null>(null);

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token) {
      const decoded = decodeJWT(token);

      const email =
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ];

      const role =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      setSession({ email, role });
    }

    if (!token) setSession(null);
  }, []);

  const addSession = async (token: string) =>
    Cookies.set("accessToken", token, {
      expires: 1, // 1 day
    });

  const removeSession = async () => Cookies.remove("accessToken");

  return (
    <SessionContext.Provider value={{ session, addSession, removeSession }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;

export function useSession() {
  const context = useContext(SessionContext);

  if (context === null) {
    throw new Error("useSession must be used within an SessionProvider");
  }

  return context;
}
