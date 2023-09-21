"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { status } = useSession();

  return (
    <header className="flex flex-col xs:flex-row justify-between items-center mb-8 border-b-2 px-7">
      <Link
        href="/"
        className=" text-2xl text-indigo-500 font-[600] hover:text-indigo-700 "
        tabIndex={-1}
      >
        <h1>AllBlogs</h1>
      </Link>
      {status !== "authenticated" ? (
        <div className="flex gap-[20px] p-[30px]">
          <Link
            href="/authentication/login"
            className="hover:underline text-indigo-600 "
            tabIndex={-1}
          >
            Login
          </Link>
          <Link
            href="/authentication/register"
            className="hover:underline text-indigo-600 "
            tabIndex={-1}
          >
            Register
          </Link>
        </div>
      ) : (
        <div className="flex gap-[20px] p-[30px]">
          <Link
            href="/profile"
            className="hover:underline text-indigo-600 "
            tabIndex={-1}
          >
            Profile
          </Link>
          <button
            tabIndex={-1}
            className="hover:underline text-indigo-600"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  );
}
