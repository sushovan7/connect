"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/app/actions/user.action";

function FollowButton({ targetedUserId }: { targetedUserId: number }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleFollow() {
    setIsLoading(true);
    await toggleFollow(targetedUserId);
    toast.success("User followed successfully");
    try {
    } catch (error) {
      toast.error("Error following user");
    }
  }
  return (
    <Button
      disabled={isLoading}
      onClick={handleFollow}
      size="sm"
      variant="secondary"
    >
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
