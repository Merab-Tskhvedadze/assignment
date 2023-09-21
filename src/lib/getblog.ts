import config from "@/config";

export default async function getBlog(blogId: string) {
  const request = await fetch(`${config.api}/api/blogs/${blogId}?populate=*`);

  const { data }: { data: Blog } = await request.json();

  if (!request.ok) throw new Error("Oops something went wrong");

  return data;
}
