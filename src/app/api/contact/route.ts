import { NextResponse } from "next/server";

import { sendContactMessage } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const result = await sendContactMessage({
      name: name.trim(),
      email: email.trim(),
      phone:
        typeof phone === "string" && phone.trim()
          ? phone.trim()
          : null,
      message: message.trim(),
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Failed to send contact message" },
      { status: 500 }
    );
  }
}