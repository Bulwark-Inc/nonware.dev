import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User } from "lucide-react";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full gap-2.5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-sm">
          <Bot size={15} />
        </div>
      )}

      <div
        className={`
          max-w-[82%]
          sm:max-w-[78%]
          rounded-2xl
          px-3.5 py-2.5
          text-sm
          leading-relaxed
          ${
            isUser
              ? "rounded-br-md bg-gradient-to-br from-violet-600 via-blue-600 to-blue-500 text-white shadow-sm"
              : "rounded-bl-md border border-border/60 bg-muted/70 text-foreground"
          }
        `}
      >
        <div
          className="
            break-words

            [&>p]:mb-2
            [&>p:last-child]:mb-0

            [&>strong]:font-semibold

            [&>ul]:my-2
            [&>ul]:list-disc
            [&>ul]:pl-5

            [&>ol]:my-2
            [&>ol]:list-decimal
            [&>ol]:pl-5

            [&_li]:my-1

            [&_a]:font-medium
            [&_a]:underline
            [&_a]:underline-offset-2

            [&_code]:rounded
            [&_code]:bg-black/10
            [&_code]:px-1
            [&_code]:py-0.5
            [&_code]:font-mono
            [&_code]:text-[0.9em]

            [&_pre]:my-3
            [&_pre]:overflow-x-auto
            [&_pre]:rounded-lg
            [&_pre]:bg-black/20
            [&_pre]:p-3

            [&_pre_code]:bg-transparent
            [&_pre_code]:p-0

            [&_blockquote]:my-2
            [&_blockquote]:border-l-2
            [&_blockquote]:border-violet-500
            [&_blockquote]:pl-3
            [&_blockquote]:italic
          "
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <User size={15} />
        </div>
      )}
    </div>
  );
}