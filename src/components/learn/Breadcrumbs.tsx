import Link from "next/link";
import type { Tutorial, TutorialLesson } from "@/lib/learn";

type BreadcrumbsProps = {
  tutorial: Tutorial;
  lesson?: TutorialLesson;
};

export default function Breadcrumbs({
  tutorial,
  lesson,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-sm text-zinc-500 dark:text-zinc-400"
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/learn"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Learn
          </Link>
        </li>

        <li aria-hidden="true">/</li>

        <li>
          <Link
            href={`/learn/${tutorial.slug}`}
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {tutorial.title.replace(" Tutorial", "")}
          </Link>
        </li>

        {lesson && (
          <>
            <li aria-hidden="true">/</li>

            <li
              aria-current="page"
              className="text-zinc-900 dark:text-zinc-100"
            >
              {lesson.title}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}