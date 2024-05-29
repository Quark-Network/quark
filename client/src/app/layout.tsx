import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteMetaData } from "@/utils/constants";
import { NavigationBar } from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMetaData.name,
  description: siteMetaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/logo/logo-dark.png" />
      </head>
      <body className={`${inter.className} transition-all bg-black bg-dark overflow-x-hidden`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
