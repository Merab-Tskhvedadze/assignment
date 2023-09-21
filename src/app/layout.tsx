"use client";

import type { Metadata } from "next";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Header, Footer } from "@/components";

import "@/styles/styles.css";

export const metadata: Metadata = {
  title: "Blog posts",
  description: "assignment",
};

function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className=" container mx-auto">
        <SessionProvider session={session}>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
