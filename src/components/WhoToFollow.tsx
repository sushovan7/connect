import { getRandomUsers } from "@/app/actions/user.action";
import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";

async function WhoToFollow() {
  const users = await getRandomUsers();
  // if (users?.length === 0) return null;

  return (
    <Card className="mb-6">
      <CardHeader className="mb-4">
        <CardTitle>Who to follow</CardTitle>
      </CardHeader>
      {users?.map((item) => {
        return (
          <CardContent>
            <div className="flex items-center justify-between border">
              <div>
                <Avatar className="w-12 h-12 rounded-full  overflow-hidden">
                  <AvatarImage
                    src={item.image || "/avatar.png"}
                    className="w-full h-full"
                  />
                </Avatar>
              </div>
            </div>
          </CardContent>
        );
      })}
    </Card>
  );
}

export default WhoToFollow;
