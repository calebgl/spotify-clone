import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

type ButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "grid place-content-center rounded-full bg-[#000000b3] text-black",
        className,
      )}
    >
      {children}
    </button>
  );
}
