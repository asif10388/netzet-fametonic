import type { Metadata } from "next";
import { Figtree, Urbanist, Nunito } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Turn Social Media Into a Profitable Career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${figtree.variable} ${urbanist.variable} ${nunito.variable} lg:overflow-hidden max-w-[1440px] mx-auto antialiased`}
      >
        <Banner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
