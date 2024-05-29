"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHomeFilled, IconInfoCircleFilled, IconBrandGithub, IconFileCertificate } from "@tabler/icons-react";
export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      target: "_self",
      icon: <IconHomeFilled className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      target: "_self",
      icon: <IconInfoCircleFilled className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "New Certificate",
      link: "/new-certificate",
      target: "_self",
      icon: <IconFileCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Source code",
      link: "https://github.com/Quark-Network/quark",
      target: "_blank",
      icon: (
        <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}