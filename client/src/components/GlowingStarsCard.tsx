"use client";

import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import { heroFeatures } from "@/data/heroFeatures";

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="grid gap-10 xl:grid-cols-3 py-20 items-center justify-center antialiased px-10 overflow-x-hidden">
      {heroFeatures.map((feature, i) => (
        <GlowingStarsBackgroundCard key={i}>
          <GlowingStarsTitle>{feature.title}</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>{feature.description}</GlowingStarsDescription>
            <div className="p-2 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      ))}
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
