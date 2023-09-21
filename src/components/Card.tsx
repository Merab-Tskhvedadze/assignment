import Image from "next/image";
import Link from "next/link";

import config from "@/config";

type Props = {
  imgSrc: string;
  title: string;
  summery: string;
  username: string;
  url: string | number;
};

export function Card({ imgSrc, title, summery, username, url }: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-fit">
      <Image
        src={`${config.api}${imgSrc}`}
        alt="thumbnail"
        width={385}
        height={300}
      />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">
          <Link href={`/${url}`} className="hover:underline">
            {title}
          </Link>
        </p>
        <p className="text-gray-700 text-base">{summery}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          by: {username}
        </span>
      </div>
    </div>
  );
}
