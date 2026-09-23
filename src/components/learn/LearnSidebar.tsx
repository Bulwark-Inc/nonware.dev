import type { Tutorial } from "@/lib/learn";

import TutorialLessonLink from "./LearnLessonLink";

type TutorialSidebarProps = {
  tutorial: Tutorial;
};

export default function TutorialSidebar({
  tutorial,
}: TutorialSidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 lg:block">
      <div className="sticky top-0 h-screen overflow-y-auto px-4 py-6">
        <h2 className="mb-6 text-lg font-bold text-zinc-900 dark:text-zinc-100">
          {tutorial.title}
        </h2>

        <nav className="space-y-6">
          {tutorial.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                {section.title}
              </h3>

              <div className="space-y-1">
                {section.lessons.map((lesson) => (
                  <TutorialLessonLink
                    key={lesson.slug}
                    href={`/learn/${tutorial.slug}/${lesson.slug}`}
                    title={lesson.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}