import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "register or login in Allblogs account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
