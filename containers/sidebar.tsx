"use client";

import NavLinks from "@/components/modules/nav-links";
import { images } from "@/constants/images";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <div
      className={cn(
        "absolute z-10 md:translate-x-0 transition duration-300 inset-0 md:relative md:w-[250px] bg-gray-900 dark:bg-gray-800 text-white dark:text-black h-screen overflow-y-auto scrollbar",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex justify-between items-center md:justify-start px-2 mt-2 mb-5">
        <Link href="/main">
          <Image src={images.logo} alt="logo" width={130} height={52} />
        </Link>

        <button onClick={close} className="md:hidden">
          <XIcon className="text-white w-[1.2rem]" />
        </button>
      </div>
      <NavLinks />
    </div>
  );
}
