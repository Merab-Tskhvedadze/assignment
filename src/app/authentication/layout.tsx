import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authentication",
  description: "register or login in Allblogs account",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return <>{children}</>;
  }

  redirect("/");
}
