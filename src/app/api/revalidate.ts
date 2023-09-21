// http://localhost:3000/api/revalidate?path=/&secret=84fadbab9a849b12f6cb1502bb90583d

// http://localhost:3000/api/revalidate?tag=blogs&secret=84fadbab9a849b12f6cb1502bb90583d

// http://localhost:3000/?tag=blogs&secret=84fadbab9a849b12f6cb1502bb90583d

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidate: true });
}
