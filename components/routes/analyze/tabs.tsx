"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/analyze/overview", label: "Overview" },
  { href: "/analyze/history-positions", label: "History Positions" },
  { href: "/analyze/user-ips", label: "User IPs" },
];

export default function MainTabs() {
  const { data } = useBasicAnalyze();
  const pathname = usePathname();

  return (
    <Tabs>
      <TabsList className="w-fit">
        {links.map((link) => (
          <Link href={data ? link.href : "#"} key={link.href}>
            <TabsTrigger
              className={cn(
                link.href === pathname ? "bg-background text-foreground" : ""
              )}
              value={link.href}
              disabled={!data}
            >
              {link.label}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  );
}
