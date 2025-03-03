import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Suspense } from "react";
import SideNav from "./_components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "꽃동산 아카데미",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row min-h-screen">
      <SideNav />
      {children}
    </div>
  );
}
