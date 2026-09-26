import { NextResponse } from "next/server";
import { sendChatMessage } from "@/lib/chat";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const result = await sendChatMessage(message);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Failed to get chatbot response" },
      { status: 500 }
    );
  }
}