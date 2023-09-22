"use client";

import { FormEvent, useState } from "react";
import { Metadata } from "next";

import registerUser from "@/lib/registerUser";

import { Button } from "@/components";

export const metadata: Metadata = {
  title: "Create an account",
  description: "allblogs registration form",
};

export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      username,
    };

    const result = await registerUser(payload);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="flex flex-col items-center sm:my-56 px-6 py-8 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  border-t-4 border-t-indigo-500">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h1>
          <form
            onSubmit={submitHandler}
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
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
                placeholder="John"
                required
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
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
                required
              />
            </div>
            {error && (
              <div className="bg-red-500 w-fit py-1 px-3 rounded-md ">
                <p className="text-white">{error}</p>
              </div>
            )}
            <Button type="submit">Create an account</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
