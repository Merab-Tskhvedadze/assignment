"use client";

import { FormEvent, useState } from "react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Visit your account",
  description: "allblogs login form",
};

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative z-30 flex flex-col items-center sm:my-56 px-6 py-8 mx-auto lg:py-0 ">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-t-4 border-t-indigo-500">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Visit your account
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
              />
            </div>
            {error && (
              <div className="bg-red-500 w-fit py-1 px-3 rounded-md ">
                <p className="text-white">{error}</p>
              </div>
            )}
            <Button type="submit">Visit</Button>
            <Button type="button" onClick={() => signIn("google")}>
              <FcGoogle />
              <span>Google</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
