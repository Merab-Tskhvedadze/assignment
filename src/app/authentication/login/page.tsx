"use client";

import { useSession, signIn, signOut } from "next-auth/react";

import { Metadata } from "next";

import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Visit yours account",
  description: "allblogs login form",
};

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  // return (
  //   <div className="relative z-30 flex flex-col items-center sm:my-56 px-6 py-8 mx-auto lg:py-0">
  //     <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
  //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
  //           Visit yours account
  //         </h1>
  //         <form className="space-y-4 md:space-y-6" action="#">
  //           <div>
  //             <label
  //               htmlFor="email"
  //               className="block mb-2 text-sm font-medium text-gray-900"
  //             >
  //               Your email
  //             </label>
  //             <input
  //               type="email"
  //               name="email"
  //               id="email"
  //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
  //               placeholder="name@company.com"
  //               required
  //             />
  //           </div>
  //           <div>
  //             <label
  //               htmlFor="password"
  //               className="block mb-2 text-sm font-medium text-gray-900"
  //             >
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               name="password"
  //               id="password"
  //               placeholder="••••••••"
  //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
  //               required
  //             />
  //           </div>
  //           <Button type="submit">Visit</Button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}
