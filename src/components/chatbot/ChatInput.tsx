"use client";

import { FormEvent, useState } from "react";
import { ArrowUp } from "lucide-react";

type ChatInputProps = {
  onSubmit: (message: string) => void;
  disabled?: boolean;
};

export default function ChatInput({
  onSubmit,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) {
      return;
    }

    onSubmit(trimmedMessage);
    setMessage("");
  }

  const hasMessage = message.trim().length > 0;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`
          group relative rounded-2xl p-[1px]
          bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500
          transition-all duration-300
          ${
            disabled
              ? "opacity-50"
              : "focus-within:shadow-lg focus-within:shadow-blue-500/10"
          }
        `}
      >
        {/* Animated gradient layer */}
        <div
          className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500
            bg-[length:200%_100%]
            opacity-0 blur-sm
            transition-opacity duration-300
            ${
              !disabled
                ? "group-focus-within:animate-[gradient_3s_linear_infinite] group-focus-within:opacity-60"
                : ""
            }
          `}
        />

        <div className="relative flex items-center gap-2 rounded-[15px] bg-background px-2 py-2">
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Ask NonWare AI..."
            disabled={disabled}
            autoComplete="off"
            className="
              min-w-0 flex-1
              bg-transparent
              px-2 py-2
              text-sm
              text-foreground
              outline-none
              placeholder:text-muted-foreground
              disabled:cursor-not-allowed
            "
          />

          <button
            type="submit"
            disabled={disabled || !hasMessage}
            aria-label="Send message"
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500
              text-white
              shadow-md shadow-blue-500/20
              transition-all duration-200
              hover:scale-105
              hover:shadow-lg hover:shadow-blue-500/25
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:hover:scale-100
            "
          >
            <ArrowUp size={17} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <p className="mt-1.5 px-1 text-[10px] text-muted-foreground">
        Press Enter to send
      </p>
    </form>
  );
}
