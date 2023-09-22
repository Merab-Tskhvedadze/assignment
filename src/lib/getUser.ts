import config from "@/config";

export default async function getUser(token: string) {
  const request = await fetch(`${config.api}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { tags: ["user"], revalidate: 1 },
  });

  const { data }: { data: User } = await request.json();

  if (!request.ok) throw new Error("Oops something went wrong");

  return data;
}
