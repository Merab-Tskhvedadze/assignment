"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="flex flex-col xs:flex-row justify-between items-center border-b-2 px-7">
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
          <button
            tabIndex={-1}
            className="hover:underline text-indigo-600"
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <div className="flex gap-1 items-center">
            <span className=" font-semibold text-gray-500">
              {session.user?.username || session.user?.name}
            </span>

            {session.user?.image ? (
              <Image
                style={{ borderRadius: "16px" }}
                src={session.user.image}
                alt={"user profile"}
                width={30}
                height={30}
              />
            ) : (
              <Image
                style={{ borderRadius: "16px" }}
                src={
                  "http://localhost:1337/uploads/default_avatar_08f8c78144.webp"
                }
                alt={"user profile"}
                width={30}
                height={30}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
}
