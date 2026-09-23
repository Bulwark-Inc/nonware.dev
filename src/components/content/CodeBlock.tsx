type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
};

export default function CodeBlock({
  children,
  language,
}: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
      {language && (
        <div className="border-b border-zinc-800 px-4 py-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
          {language}
        </div>
      )}

      <pre className="overflow-x-auto p-4 text-sm leading-6 text-zinc-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}