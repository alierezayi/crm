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
    <div className="md:px-1.5 md:py-1.5 h-screen ">
      <div
        className={cn(
          "absolute z-10 md:translate-x-0 transition duration-300 inset-0 md:relative md:w-[260px] bg-[#222831] dark:bg-slate-900 text-white dark:text-black h-full overflow-y-auto scrollbar md:rounded-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center md:justify-start px-2 mt-2.5 mb-5">
          <Link
            href="/main"
            className="w-full bg-gray-700 rounded-xl px-4 py-2"
          >
            <Image src={images.logo} alt="logo" width={120} height={70} />
          </Link>

          <button onClick={close} className="md:hidden">
            <XIcon className="text-white w-[1.2rem]" />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
}
