"use client";

import { NAVLINKS } from "@/constants/nav-links";
import { profileAPI } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();
  // const [links, setLinks] = useState<typeof NAVLINKS>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: profileAPI,
  });

  // console.log(data?.data.permissions);

  // function getNavLinksByCodes(codes: number[], navLinks: typeof NAVLINKS) {
  //   // Convert the codes array to string for comparison
  //   // const codeStrings = codes.map((code) => code.toString());

  //   return navLinks.filter((navLink) => codes.includes(navLink.id));
  // }

  // useEffect(() => {
  //   if (data?.data.permissions) {
  //     const filteredLinks = getNavLinksByCodes(data.data.permissions, NAVLINKS);
  //     setLinks(filteredLinks);
  //   }
  // }, [data?.data.permissions]);

  return (
    <div className="">
      {isLoading ? (
        <div className="w-full flex justify-center items-center dark:text-white">
          loading ...
        </div>
      ) : (
        <Accordion type="single" collapsible className="px-1.5">
          <AccordionItem value="item-1">
            <AccordionTrigger className="dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 px-3 rounded-md">
              Stop Out
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1 dark:text-white bg-gray-800 dark:bg-gray-700 px-1 mt-2 mb-2 rounded-md">
              {NAVLINKS.stopOut.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className={cn(
                    "py-2 truncate hover:bg-gray-900 px-2.5 rounded-l-none hover:rounded",
                    pathname === item.path &&
                      "border-l-[3px] border-blue-500 text-blue-500"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 px-3 rounded-md">
              Prop
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1 dark:text-white bg-gray-800 dark:bg-gray-700 px-1 mt-2 rounded-md">
              {NAVLINKS.prop.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className={cn(
                    "py-2 truncate hover:bg-gray-900 px-2.5 rounded-l-none hover:rounded",
                    pathname === item.path &&
                      "border-l-[3px] border-blue-500 text-blue-500"
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
