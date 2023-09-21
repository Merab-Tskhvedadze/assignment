import Link from "next/link";

type Props = {
  total: number;
  page: number;
};

export function Pagination({ total, page }: Props) {
  return (
    <div className="flex items-center gap-10">
      <Link
        href={`${page <= 1 ? "#" : `?page=${page - 1}`}`}
        className={`bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 ${
          page <= 1 && " pointer-events-none opacity-60 "
        }}`}
      >
        Previous
      </Link>
      <Link
        href={`${page !== total ? `?page=${page + 1}` : "#"}`}
        className={`bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 ${
          page === total && " pointer-events-none opacity-60 "
        }}`}
      >
        Next
      </Link>
    </div>
  );
}
