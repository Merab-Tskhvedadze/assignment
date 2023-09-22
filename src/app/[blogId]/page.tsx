import { Metadata } from "next";
import Image from "next/image";
import config from "@/config";
import getBlog from "@/lib/getblog";

type Props = {
  params: {
    blogId: string;
  };
};

export const metadata: Metadata = {
  title: "Blog detail",
  description: "current blogs detail page",
};

export default async function BlogDetails({ params: { blogId } }: Props) {
  const data = await getBlog(blogId);

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-2xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="mb-6 not-italic">
              <div className="items-center mr-3 text-sm text-gray-900">
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    {data?.attributes?.username}
                  </p>
                  <p className="text-base text-gray-500">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              {data?.attributes?.Title}
            </h1>
          </header>
          <figure className="my-5">
            <Image
              src={`${config.api}${data.attributes.Thumbnail.data.attributes.url}`}
              alt="thumbnail"
              width={700}
              height={500}
              style={{ borderRadius: "16px" }}
            />
          </figure>
          <p className="lead">{data?.attributes?.Content}</p>
        </article>
      </div>
    </main>
  );
}
