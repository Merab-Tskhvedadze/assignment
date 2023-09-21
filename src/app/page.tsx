import getBlogs from "@/lib/getBlogs";

import { Card, Pagination } from "@/components";

type Props = {
  searchParams: {
    page: string;
  };
};

export default async function Home({ searchParams: { page } }: Props) {
  const { data, meta } = await getBlogs(page);

  return (
    <main>
      <div className="w-fit mx-auto my-10">
        <Pagination
          total={meta.pagination.pageCount}
          page={meta.pagination.page}
        />
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-screen gap-16">
        {data.map((blog) => {
          return (
            <Card
              key={blog.id}
              url={blog.id}
              imgSrc={blog.attributes.Thumbnail.data.attributes.url}
              title={blog.attributes.Title}
              summery={blog.attributes.Summary}
              username={blog.attributes.username}
            />
          );
        })}
      </div>
    </main>
  );
}
