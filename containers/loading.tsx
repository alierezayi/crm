"use client";

import { useTheme } from "next-themes";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  const { theme } = useTheme();
  return (
    <div className="w-full h-full flex justify-center items-center p-10">
      <MoonLoader
        size={40}
        speedMultiplier={1}
        color={theme === "dark" ? "#fff" : ""}
      />
    </div>
  );
}
