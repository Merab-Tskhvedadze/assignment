import config from "@/config";

export default async function getBlogs(page: string) {
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&pagination[page]=${
      page ? page : 1
    }&pagination[pageSize]=${8}`,
    { next: { tags: ["blogs"], revalidate: 1 } }
  );

  if (!request.ok) throw new Error("Oops something went wrong");

  const response: Promise<Data> = await request.json();

  return response;
}
