export default async function getUser(userId: string) {
  const res = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!(await res).ok) throw new Error("Failed to fetch user");
  return (await res).json();
}
