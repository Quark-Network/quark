"use client";

import React, { useState } from 'react';

export default function NewCertificate() {
  const stringToEncode = new Date().toDateString();
  const encodedString = btoa("To Quark Client" + ", at " + stringToEncode);
  const [data] = useState(encodedString);
  const currentDateTime = new Date().toISOString().replace(" ", "_");

  const handleDownload = () => {
    const blob = new Blob([data], { type: 'text/key' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentDateTime}.key`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <span className="text-[45px] md:text-9xl font-semibold tracking-tight divide-y-2 pb-4 bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-transparent">
        New Certificate
      </span>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/[0.7]">Your name</label>
          <input type="text" id="clientName" className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-neutral-900 border-neutral-800 placeholder-zinc-700 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="e.g., Sujay Mukherjee" required />
        </div>
      </form>
      <button type="submit" onClick={handleDownload} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`Get Certificate`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </div>
  );
};