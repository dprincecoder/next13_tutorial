export default async function getAllUsers() {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  if (!(await res).ok) throw new Error("Failed to fetch data");
  return (await res).json();
}
