"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  const router = useRouter();

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10 h-screen">
      <h1 className="text-red-500 text-2xl">Something went wrong</h1>
      <div className="flex flex-col gap-3 items-center mt-5">
        <button
          className=" text-indigo-500 hover:text-indigo-600 hover:underline"
          onClick={() => router.replace("/")}
        >
          Go back to home
        </button>
        <button
          className=" text-indigo-500 hover:text-indigo-600 hover:underline"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
