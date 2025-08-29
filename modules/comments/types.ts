import { User } from "@/modules/auth/types";

export interface Comment {
  id: string;
  body: string;
  user: User;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCommentData {
  postId: number;
  body: string;
}
