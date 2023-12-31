import getBlogs from "@/lib/getBlogs";

import { Card, Pagination, SearchBox } from "@/components";

type Props = {
  searchParams: {
    page: string;
  };
};

export default async function Home({ searchParams: { page } }: Props) {
  const { data, meta } = await getBlogs(page);

  return (
    <main className=" min-h-screen flex flex-col justify-between ">
      <SearchBox />
      <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-16 ">
        {data.map((blog) => {
          return (
            <Card
              key={blog.id}
              url={blog.id}
              imgSrc={blog.attributes.Thumbnail.data.attributes.url}
              title={blog.attributes.Title}
              summery={blog.attributes.Summary}
              username={blog.attributes.user.data.attributes.username}
              date={blog.attributes.publishedAt}
            />
          );
        })}
      </div>
      <div className="w-fit mx-auto my-10">
        <Pagination
          total={meta.pagination.pageCount}
          page={meta.pagination.page}
        />
      </div>
    </main>
  );
}
