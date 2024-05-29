"use client";

import Go from "./Go";

export interface AboutPageCardProps {
    title: string;
    description: string;
    href: string;
};

export default function AboutPageCard({ title, description, href }: AboutPageCardProps) {
    return (
        <>
            <div className="inline-block flex-col max-w-[37rem] min-w-[15rem] hover:text-white rounded-md border-[0.1px] border-neutral-800 md:border-neutral-500 mt-4 p-4">
                <h1 className="text-2xl tracking-tight font-semibold pb-2 text-neutral-400">
                    {title}
                </h1>
                <p className="text-xs md:text-sm text-neutral-500 md:text-neutral-300 pb-2">
                    {description}
                </p>
                <Go href={href} target="_self">
                    <div className="border-[0.1px] border-neutral-800 md:border-neutral-500 p-2 text-center rounded-md text-xs text-neutral-400 md:text-neutral-200 hover:bg-neutral-800 md:hover:bg-neutral-600 md:hover:text-white transition-all duration-300">
                        {title}
                    </div>
                </Go>
            </div>
        </>
    );
};