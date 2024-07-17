import { ModeToggle } from "@/components/modules/mode-toggle";
import { LogoutAlert } from "@/components/templates/alerts/logout-alert";

export default function Header() {
  return (
    <div className="h-16 border-b flex justify-end items-center p-2 md:p-5 md:gap-3">
      <ModeToggle />
      <LogoutAlert />
    </div>
  );
}
