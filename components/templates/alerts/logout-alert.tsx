"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logoutAPI } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "@/context/session-context";

export function LogoutAlert() {
  const router = useRouter();
  const { removeSession } = useSession();

  const handleLogout = async () => {
    const { res, error } = await logoutAPI();

    if (res?.status !== 200 || error) {
      toast.error("Logout failed", {
        description: error?.message,
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      });
    }

    if (res) {
      const data = res.data;

      removeSession();

      router.push("/");

      toast.success("Successfuly", {
        description: data,
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <LogOut className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to log out of your account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
