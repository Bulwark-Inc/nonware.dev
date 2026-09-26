"use client";

import { useState } from "react";
import {
  Bot,
  MessageCircle,
  Zap,
  X,
  Minimize2,
} from "lucide-react";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(message: string) {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: message },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <div
        className={`origin-bottom-right transition-all duration-300 ease-out ${
          open
            ? "mb-4 scale-100 opacity-100"
            : "pointer-events-none mb-0 scale-90 opacity-0"
        }`}
      >
        <div className="flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl shadow-black/20 backdrop-blur-xl">
          {/* Header */}
          <div className="relative overflow-hidden border-b">
            {/* Gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10" />

            <div className="relative flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20">
                  <Bot size={21} />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-semibold tracking-tight">
                      NonWare AI
                    </h2>
                    <Zap size={14} className="text-violet-500" />
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                    Online
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Minimize chat"
                >
                  <Minimize2 size={17} />
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-red-500/10 hover:text-red-500"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/15">
                  <Bot
                    size={25}
                    className="text-violet-500"
                  />
                </div>

                <h3 className="mb-1 font-semibold">
                  Hey there 👋
                </h3>

                <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                  I&apos;m the NonWare AI assistant. Ask me anything and
                  let&apos;s learn to build something useful together.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    role={message.role}
                    content={message.content}
                  />
                ))}
              </div>
            )}

            {/* Thinking indicator */}
            {loading && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white">
                  <Bot size={15} />
                </div>

                <div className="flex items-center gap-1 rounded-xl bg-muted px-3 py-2">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t bg-muted/20 p-3">
            <ChatInput
              onSubmit={handleSubmit}
              disabled={loading}
            />

            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              Powered by NonWare AI
            </p>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 ${
          open ? "rotate-0" : ""
        }`}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {/* Glow */}
        <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-br from-violet-500 to-blue-500 opacity-40 blur-xl" />

        {open ? (
          <X
            size={23}
            className="transition-transform duration-300"
          />
        ) : (
          <MessageCircle
            size={24}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </button>
    </div>
  );
}