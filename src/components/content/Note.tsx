type NoteProps = {
  children: React.ReactNode;
};

export default function Note({
  children,
}: NoteProps) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-zinc-400 bg-zinc-50 p-4 dark:border-zinc-500 dark:bg-zinc-900">
      <p className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
        Note
      </p>

      <div className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}