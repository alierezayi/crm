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
      {theme === "dark" ? (
        <Button
          variant="ghost"
          onClick={() => setTheme("light")}
          size="icon"
          className="bg-transparent"
        >
          <Sun className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          onClick={() => setTheme("dark")}
          size="icon"
          className="bg-transparent"
        >
          <Moon className="h-4 w-4" />
        </Button>
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
