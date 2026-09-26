"use client";

import { FormEvent, useState } from "react";

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Ask something..."
        disabled={disabled}
      />

      <button type="submit" disabled={disabled}>
        Send
      </button>
    </form>
  );
}