import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import type { Metadata } from "next";
import { Suspense } from "react";
import UserPosts from "./UserPosts";

interface Params {
  params: {
    userId: string;
  };
}
export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  return {
    title: user.name,
    description: `${user.name}'s Page`,
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  // const [user, userPost] = await Promise.all([userData, userPostsData])
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
