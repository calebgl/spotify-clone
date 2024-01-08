"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <li className="px-3 py-1">
      <Link
        href={href}
        className={cn(
          "flex h-10 items-center gap-5 font-bold text-neutral-400 transition-colors duration-300 hover:text-white",
          { "text-white": pathname === href },
        )}
      >
        {children}
      </Link>
    </li>
  );
}
