import { NextResponse } from "next/server";
import { sendChatMessage } from "@/lib/chat";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatbotContext = {
  siteName: string;
  siteDescription: string;
  assistantPurpose: string;
  capabilities?: string[];
};

const MAX_MESSAGES = 10;

export async function POST(request: Request) {
  try {
    const { messages, context } = await request.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages must be an array" },
        { status: 400 }
      );
    }

    if (messages.length > MAX_MESSAGES) {
      return NextResponse.json(
        { error: "Demo conversation limit reached" },
        { status: 400 }
      );
    }

    if (!context || typeof context !== "object") {
      return NextResponse.json(
        { error: "Chatbot context is required" },
        { status: 400 }
      );
    }

    for (const message of messages) {
      if (
        !message ||
        !["user", "assistant"].includes(message.role) ||
        typeof message.content !== "string"
      ) {
        return NextResponse.json(
          { error: "Invalid message format" },
          { status: 400 }
        );
      }
    }

    const result = await sendChatMessage(
      messages as Message[],
      context as ChatbotContext
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Failed to get chatbot response" },
      { status: 500 }
    );
  }
}