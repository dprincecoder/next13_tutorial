import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
};

const UsersPage = async () => {
  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;

  return (
    <section>
      <h2>
        {users.map((user) => (
          <div key={user.id}>
            <p>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </div>
        ))}
      </h2>
    </section>
  );
};

export default UsersPage;
