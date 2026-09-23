type ExpectedOutputProps = {
  children: React.ReactNode;
};

export default function ExpectedOutput({
  children,
}: ExpectedOutputProps) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="border-b border-zinc-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        Expected Output
      </div>

      <pre className="overflow-x-auto p-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        <code>{children}</code>
      </pre>
    </div>
  );
}