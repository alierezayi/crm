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
import { logoutAPI } from "@/services/auth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function LogoutAlert() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await logoutAPI();
    if (error) {
      toast.error(error.message);
      return;
    }
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <LogOut className="h-[1rem] w-[1rem]" />
        </Button>
        {/* <button>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button> */}
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
