import config from "@/config";

export default async function getSearchItem(searchTerm: string, page: string) {
  const request = await fetch(
    `${
      config.api
    }/api/blogs?filters[Title][$contains]=${searchTerm}&pagination[page]=${
      page ? page : 1
    }&pagination[pageSize]=${6}&populate=*`
  );

  const data: Data = await request.json();

  if (!request.ok) throw new Error("Oops something went wrong");

  return data;
}
