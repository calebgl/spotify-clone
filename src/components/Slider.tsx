"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

import { cn } from "~/lib/utils";

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "group relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-fg">
      <SliderPrimitive.Range className="absolute h-full bg-white transition-colors group-hover:bg-fg-hover" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="bg-background hidden h-3 w-3 rounded-full bg-white focus:outline-none active:outline-none disabled:pointer-events-none disabled:opacity-50 group-hover:block" />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
