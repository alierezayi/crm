"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-14 flex justify-end">
      <Button variant="ghost" size="icon" className="rounded-full">
        {theme === "dark" ? (
          <Sun
            className="h-[1.2rem] w-[1.2rem]"
            onClick={() => setTheme("light")}
          />
        ) : (
          <Moon
            className="h-[1.2rem] w-[1.2rem]"
            onClick={() => setTheme("dark")}
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
