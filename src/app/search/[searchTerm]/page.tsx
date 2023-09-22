import { Metadata } from "next";
import { Card, Pagination } from "@/components";
import getSearchItem from "@/lib/getSearchItem";

export const metadata: Metadata = {
  title: "Search results",
  description: "search results for blogs",
};

type Props = {
  params: {
    searchTerm: string;
    page: string;
  };
  searchParams: {
    page: string;
  };
};

export default async function Search({
  params: { searchTerm },
  searchParams: { page },
}: Props) {
  const { data, meta } = await getSearchItem(searchTerm, page);

  return (
    <main className=" min-h-screen">
      <div className="flex flex-wrap gap-16 my-8 justify-center items-center">
        {data.map((blog) => {
          return (
            <Card
              key={blog.id}
              imgSrc={blog.attributes.Thumbnail.data.attributes.url}
              title={blog.attributes.Title}
              summery={blog.attributes.Summary}
              username={blog.attributes.username}
              url={blog.id}
            />
          );
        })}
      </div>
      {meta.pagination.pageCount > 1 && (
        <div className="w-fit mx-auto my-10">
          <Pagination
            total={meta.pagination.pageCount}
            page={meta.pagination.page}
          />
        </div>
      )}
    </main>
  );
}
