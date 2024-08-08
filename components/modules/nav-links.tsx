"use client";

import { NAVLINKS } from "@/constants/nav-links";
import { profileAPI } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebar-context";

export default function NavLinks() {
  const pathname = usePathname();

  const { close } = useSidebar();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: profileAPI,
  });

  const stopOut = NAVLINKS.stopOut.filter((link) => link.state === 1);
  const prop = NAVLINKS.prop.filter((link) => link.state === 1);

  return (
    <div className="">
      {isLoading ? (
        <div className="w-full flex justify-center items-center dark:text-white">
          <span className="w-2 h-2 rounded-full bg-white animate-ping mr-2" />
          loading ...
        </div>
      ) : (
        <Accordion type="single" collapsible className="px-2">
          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 px-3 py-2.5 rounded mb-2">
              Prop
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-0.5 dark:text-white pl-1 border-l border-gray-800 dark:border-gray-700 ml-2 mt-1">
              {prop.map((item, i) => (
                <Link
                  href={item.path}
                  onClick={close}
                  key={i}
                  className={cn(
                    "py-2 truncate text-xs font-medium hover:bg-gray-700 dark:hover:bg-gray-700 px-2.5 rounded",
                    pathname === item.path && "text-blue-500"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="pb-1">
            <AccordionTrigger className="dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 px-3 py-2.5 rounded">
              Stop Out
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-0.5 dark:text-white pl-1 border-l border-gray-800 dark:border-gray-700 ml-2 mt-1">
              {stopOut.map((item, i) => (
                <Link
                  href={item.path}
                  onClick={close}
                  key={i}
                  className={cn(
                    "py-2 truncate text-xs font-medium hover:bg-gray-700 dark:hover:bg-gray-700 px-2.5 rounded",
                    pathname === item.path && "text-blue-500"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
