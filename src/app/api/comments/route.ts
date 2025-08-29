import { NextRequest, NextResponse } from "next/server";

// Mock comments data for demonstration
const comments: any[] = [];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const postComments = comments.filter((comment) => comment.postId === postId);

    return NextResponse.json(postComments);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, body: commentBody } = body;

    if (!postId || !commentBody) {
      return NextResponse.json(
        { error: "Post ID and comment body are required" },
        { status: 400 }
      );
    }

    const newComment = {
      id: (comments.length + 1).toString(),
      postId,
      body: commentBody,
      user: {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
