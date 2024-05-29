"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient-card";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export interface BackgroundGradientCardProps {
  src: string;
  title: string;
  description: string;
  amountValue: number;
};

export function BackgroundGradientCard({ src, title, description, amountValue }: BackgroundGradientCardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 x-50">
        <Image
          src={src}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-neutral-200 mt-4 mb-2">
          {title}
        </p>

        <p className="text-sm text-neutral-400">
          {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {amountValue} Q
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
