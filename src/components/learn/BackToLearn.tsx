import Link from "next/link";
import type { Tutorial } from "@/lib/learn";

type BackToTutorialProps = {
  tutorial: Tutorial;
};

export default function BackToTutorial({
  tutorial,
}: BackToTutorialProps) {
  return (
    <Link
      href={`/learn/${tutorial.slug}`}
      className="mb-6 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
    >
      ← Back to {tutorial.title}
    </Link>
  );
}