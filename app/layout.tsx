import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golem Adventskalender",
  description: "Golem Adventskalender",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full min-h-screen w-full flex-wrap justify-center gap-8 bg-[url(/bg.jpg)] bg-cover bg-center p-10">
          {children}
        </main>
      </body>
    </html>
  );
}
