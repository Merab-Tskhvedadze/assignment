import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Search results",
  description: "search results for blogs",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
