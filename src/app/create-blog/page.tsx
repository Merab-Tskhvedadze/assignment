"use client";

import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import config from "@/config";

import { Button } from "@/components";

export default function CreateBlog() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  const [title, setTitle] = useState<string>("");
  const [summary, setSumary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        data: {
          title,
          content,
          summary,
          user: {
            id: session?.id,
            username: session?.user?.username || session?.user?.name,
          },
        },
      };

      console.log(JSON.stringify(data));

      const response = await fetch(`${config.api}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.jwt}`,
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        const responseData = await response.json(); // Parse response JSON
        console.log("Blog post successful:", responseData);
      } else {
        console.error("Error posting blog:", response);
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={submitHandler} className="py-6 px-9">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="Title"
              id="Title"
              placeholder="Your blogs title"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="text"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Summery
            </label>
            <input
              value={summary}
              onChange={(e) => setSumary(e.target.value)}
              type="text"
              name="Summery"
              id="ummery"
              placeholder="Your blogs summery"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Content
            </label>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              name="Content"
              id="Content"
              placeholder="Your blogs content"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Thumbnail
            </label>

            <div className="mb-8">
              <input
                type="file"
                name="Thumbnail"
                id="Thumbnail"
                className="sr-only"
              />
              <label
                htmlFor="Thumbnail"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <Button type={"submit"}>Post</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
