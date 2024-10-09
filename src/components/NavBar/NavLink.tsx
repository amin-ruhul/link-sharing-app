"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

function NavLink({ href, className, children }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-x-2 px-7 py-3 rounded-lg heading-s hover:text-primary transition-colors text-grey hover-fill-primary",
        {
          "text-primary bg-primary-light": isActive,
        },
        className
      )}
    >
      <div>{children}</div>
    </Link>
  );
}

export default NavLink;
