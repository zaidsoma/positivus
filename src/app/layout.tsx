import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
