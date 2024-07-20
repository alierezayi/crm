"use client";

import { ModeToggle } from "@/components/modules/mode-toggle";
import { LogoutAlert } from "@/components/templates/alerts/logout-alert";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/context/sidebar-context";
import { LucideMenu } from "lucide-react";

export default function Header() {
  const { open } = useSidebar();

  return (
    <div className="h-14 border-b flex justify-between md:justify-end items-center p-2 md:p-5">
      <Button
        size="icon"
        variant="outline"
        className="md:hidden"
        onClick={open}
      >
        <LucideMenu />
      </Button>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <LogoutAlert />
      </div>
    </div>
  );
}
