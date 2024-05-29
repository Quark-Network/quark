"use client";
import { HoverBorderGradientDemo } from "./HoverBorderGradient";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Try",
    },
    {
      text: "out",
    },
    {
      text: "Quark",
    },
    {
      text: "for",
    },
    {
      text: "the",
    },
    {
      text: "Best.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] overflow-x-hidden">
      <p className="text-neutral-200 text-xs sm:text-base  ">
        The Web 3.0 Infrastructure for the world
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <HoverBorderGradientDemo />
      </div>
    </div>
  );
}
