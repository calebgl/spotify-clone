import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

type NavLinkItemProps = {
  children: ReactNode;
};

export default function NavLinkItem({ children }: NavLinkItemProps) {
  return (
    <li className="cursor-pointer rounded-lg p-2 hover:bg-zinc-900">
      <a className="flex items-center gap-x-3">{children}</a>
    </li>
  );
}

type ImageProps = {
  className?: string;
  src: string;
};

type ContentProps = {
  children: ReactNode;
};

type TitleProps = {
  children: ReactNode;
};

type SubtitleProps = {
  children: ReactNode;
};

NavLinkItem.Image = function Image({ className, src }: ImageProps) {
  return (
    <picture>
      <img
        alt="cover"
        className={cn("h-12 w-12 rounded-md object-cover", className)}
        src={src}
      />
    </picture>
  );
};

NavLinkItem.Content = function Content({ children }: ContentProps) {
  return <div className="flex-start flex flex-col">{children}</div>;
};

NavLinkItem.Title = function Title({ children }: TitleProps) {
  return <p>{children}</p>;
};

NavLinkItem.Subtitle = function Subtitle({ children }: SubtitleProps) {
  return <p className="text-sm text-neutral-400">{children}</p>;
};
