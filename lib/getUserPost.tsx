export default async function getUserPosts(userId: string) {
  const res = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!(await res).ok) throw new Error("Failed to fetch user");
  return (await res).json();
}
