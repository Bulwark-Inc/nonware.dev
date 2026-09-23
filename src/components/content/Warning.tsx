type WarningProps = {
  children: React.ReactNode;
};

export default function Warning({
  children,
}: WarningProps) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:border-red-400 dark:bg-red-950/40">
      <p className="mb-1 font-semibold text-red-900 dark:text-red-200">
        Warning
      </p>

      <div className="text-sm leading-6 text-red-900 dark:text-red-200">
        {children}
      </div>
    </div>
  );
}