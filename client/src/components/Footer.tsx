"use client";

import Go from "./Go";
import { siteMetaData } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="text-center bg-neutral-900/[0.6] md:bg-neutral-900 rounded-t-full">
      <div className="p-4 text-center text-sm text-neutral-500 md:text-neutral-200">
        © {siteMetaData.copyRightYear} | <Go target="_blank" href="https://github.com/Quark-Network">Quark Network</Go>. All Rights Reserved.
      </div>
    </footer>
  )
};