import type { ButtonHTMLAttributes } from "react";

import { cn } from "~/lib/utils";

type PlayButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PlayButton({
  className,
  children,
  ...props
}: PlayButtonProps) {
  return (
    <button
      className={cn(
        "aspect-square rounded-full bg-primary p-3 transition-colors duration-300 ease-out hover:bg-primary-hover active:bg-primary-active",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
