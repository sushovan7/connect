"use server";

import { prisma } from "@/lib/Prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, imageUrl: string) {
  try {
    const userId = await getDbUserId();
    const post = await prisma.post.create({
      data: {
        content: content,
        image: imageUrl,
        authorId: userId,
      },
    });
    revalidatePath("/");
    return {
      success: true,
      post,
    };
  } catch (error) {
    console.log("Error while creating Post", error);
  }
}
