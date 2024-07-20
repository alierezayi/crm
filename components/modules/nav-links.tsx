"use client";

import { NAVLINKS } from "@/constants/nav-links";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavLinks() {
  const [links, setLinks] = useState<typeof NAVLINKS>([]);

  // useEffect(() => {
  //   if (session) {
  //     const displayedLinks = NAVLINKS.filter((link) => {
  //       const id = link.id.toString();
  //       return session?.role?.includes(id);
  //     });

  //     setLinks(displayedLinks);
  //   }
  // }, [session]);

  return (
    <div className="flex flex-col justify-center">
      {links.map((link) => (
        <Link key={link.id} href={link.path} className="px-4 py-3">
          {link.title}
        </Link>
      ))}
    </div>
  );
}
