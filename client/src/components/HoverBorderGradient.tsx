"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Go from "./Go";

export function HoverBorderGradientDemo() {
  return (
    <div className="mx-40 gap-4 flex justify-center text-center">
      <Go href="/connect-wallet" target="_self">
        <HoverBorderGradient
          containerClassName="rounded-full transition-all duration=[500ms] hover:-mt-2"
          as="button"
          className="bg-black text-white hover:text-[#37c7da] uppercase transition-all hover:font-bold duration-[500ms] flex items-center space-x-2"
        >
          <span>Connect Wallet</span>
        </HoverBorderGradient>
      </Go>
      <Go href="/build-portfolio" target="_self">
        <HoverBorderGradient
          containerClassName="rounded-full transition-all duration=[500ms] hover:-mt-2"
          as="button"
          className="bg-black text-white hover:text-[#37c7da] uppercase transition-all hover:font-bold duration-[500ms] flex items-center space-x-2"
        >
          <span>Build Portfolio</span>
        </HoverBorderGradient>
      </Go>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
