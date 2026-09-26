type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  return (
    <div>
      <strong>{role === "user" ? "You" : "Assistant"}:</strong>
      <p>{content}</p>
    </div>
  );
}