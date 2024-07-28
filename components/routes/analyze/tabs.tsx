"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const links = [
  { tab: "overview", label: "Overview" },
  { tab: "history-positions", label: "History Positions" },
  { tab: "user-ips", label: "User IPs" },
];

export default function AnalyzeTabs() {
  const { data } = useBasicAnalyze();

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (!tab) {
      router.replace(`?tab=overview`);
    }
  }, [router, tab]);

  return (
    <Tabs>
      <TabsList className="w-fit">
        {links.map((link) => (
          <Link
            href={{
              pathname: "/analyze",
              query: { tab: link.tab },
            }}
            key={link.tab}
          >
            <TabsTrigger
              className={cn(
                link.tab === tab && "bg-background text-foreground"
              )}
              value={link.tab}
            >
              {link.label}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  );
}
