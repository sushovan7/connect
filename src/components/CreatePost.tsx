"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent, CardDescription } from "./ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Image, Loader2Icon, Send } from "lucide-react";
import { createPost } from "@/app/actions/post.action";
import toast from "react-hot-toast";

function CreatePost() {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim() && !imageUrl) return;
    setIsPosting(true);
    try {
      const response = await createPost(content, imageUrl);
      if (response?.success) {
        setContent("");
        setImageUrl("");
        setShowImageUpload(false);
        setIsPosting(false);
        toast.success("Post created successfully");
      }
    } catch (error) {
      console.log("Error while creating post", error);
      toast.error("Failed to create post");
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex fitems-start gap-4 mb-6">
          <Avatar className="w-12 h-12 rounded-full  overflow-hidden">
            <AvatarImage
              src={user?.imageUrl || "/avatar.png"}
              className="w-full h-full"
            />
          </Avatar>
          <CardDescription>What's on your mind?</CardDescription>
        </div>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isPosting}
          placeholder="Type your message here."
          className="mb-4"
        />
        <div className="flex border-t py-3 items-center justify-between ">
          <div className="flex cursor-pointer items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              disabled={isPosting}
              className="text-muted-foreground hover:text-primary"
              onClick={() => {
                setShowImageUpload(!showImageUpload);
              }}
            >
              <Image className="w-4 h-4" />
              <p>Photo</p>
            </Button>
          </div>
          <Button
            variant="default"
            disabled={(!content.trim() && !imageUrl) || isPosting}
            onClick={handleSubmit}
          >
            {isPosting ? (
              <>
                <Loader2Icon className="size-4 mr-2 animate-spin" /> ...Posting
              </>
            ) : (
              <>
                <Send />
                Post
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreatePost;
