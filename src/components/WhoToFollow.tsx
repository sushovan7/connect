import { getRandomUsers } from "@/app/actions/user.action";
import React from "react";
import { Card } from "./ui/card";
import { AvatarImage, Avatar } from "./ui/avatar";
import Link from "next/link";
import FollowButton from "./FollowButton";

async function WhoToFollow() {
  const users = await getRandomUsers();
  console.log(users);

  return (
    <Card className="px-2 py-6">
      <h1 className="text-xl mb-4  font-bold text-start">Who to follow:</h1>

      {users?.map((user) => {
        return (
          <div className="flex rounded py-4 px-4 items-center justify-between border">
            <div className="flex items-center gap-3">
              <Link href={`/profile/${user.username}`}>
                {" "}
                <Avatar className="w-12 h-12 rounded-full  overflow-hidden">
                  <AvatarImage
                    src={user.image || "/avatar.png"}
                    className="w-full h-full"
                  />
                </Avatar>
              </Link>
              <div className="flex flex-col items-start ">
                <Link href={`/profile/${user.name}`}>{user.username}</Link>
                <p className="text-muted-foreground text-sm">
                  @{user.username}
                </p>
                <p className="text-muted-foreground">
                  {user._count.followers} followers
                </p>
              </div>
            </div>
            <FollowButton targetedUserId={user.id} />
          </div>
        );
      })}
    </Card>
  );
}

export default WhoToFollow;
