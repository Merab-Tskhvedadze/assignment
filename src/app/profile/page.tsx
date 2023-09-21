"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="flex my-60 w-full justify-center ">
      <div className="max-w-xs ">
        <div className="bg-white shadow-xl rounded-lg py-3 border-t-2 border-indigo-500">
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {session?.user?.username}
            </h3>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{session?.user?.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
