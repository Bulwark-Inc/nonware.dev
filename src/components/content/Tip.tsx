type TipProps = {
  children: React.ReactNode;
};

export default function Tip({
  children,
}: TipProps) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:border-blue-400 dark:bg-blue-950/40">
      <p className="mb-1 font-semibold text-blue-900 dark:text-blue-200">
        Tip
      </p>

      <div className="text-sm leading-6 text-blue-900 dark:text-blue-200">
        {children}
      </div>
    </div>
  );
}