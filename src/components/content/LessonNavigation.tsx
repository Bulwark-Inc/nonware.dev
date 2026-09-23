import Link from "next/link";

import type { TutorialLesson } from "@/lib/learn";

type LessonNavigationProps = {
  previous?: TutorialLesson;
  next?: TutorialLesson;
  tutorialSlug: string;
};

export default function LessonNavigation({
  previous,
  next,
  tutorialSlug,
}: LessonNavigationProps) {
  return (
    <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
      {previous ? (
        <Link
          href={`/learn/${tutorialSlug}/${previous.slug}`}
          className="rounded-lg border border-zinc-200 p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            ← Previous
          </span>

          <span className="mt-1 block font-semibold text-zinc-900 dark:text-zinc-100">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/learn/${tutorialSlug}/${next.slug}`}
          className="rounded-lg border border-zinc-200 p-4 text-right transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Next →
          </span>

          <span className="mt-1 block font-semibold text-zinc-900 dark:text-zinc-100">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}