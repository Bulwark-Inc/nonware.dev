import Link from "next/link";
import { notFound } from "next/navigation";
import { tutorials } from "@/lib/learn";
import {
  getSiteUrl,
  getLearnUrl,
  getTutorialUrl,
} from "@/lib/urls";
import Breadcrumbs from "@/components/learn/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

type TutorialPageProps = {
  params: Promise<{
    tutorial: string;
  }>;
};

export default async function TutorialPage({
  params,
}: TutorialPageProps) {
  const { tutorial: tutorialSlug } = await params;

  const tutorial = tutorials[tutorialSlug];

  if (!tutorial) {
    notFound();
  }

  const firstLesson = tutorial.sections[0]?.lessons[0];

  const lessonCount = tutorial.sections.reduce(
    (total, section) => total + section.lessons.length,
    0
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <BreadcrumbJsonLd
        items={[
          {
            name: "Home",
            url: getSiteUrl(),
          },
          {
            name: "Learn",
            url: getLearnUrl(),
          },
          {
            name: tutorial.title,
            url: getTutorialUrl(tutorial.slug),
          },
        ]}
      />

      <Breadcrumbs tutorial={tutorial} />

      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Tutorial
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {tutorial.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {tutorial.description}
        </p>

        <div className="mt-6 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            {lessonCount} {lessonCount === 1 ? "lesson" : "lessons"}
          </span>
        </div>

        {firstLesson && (
          <Link
            href={`/learn/${tutorial.slug}/${firstLesson.slug}`}
            className="mt-8 inline-flex rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Start Learning →
          </Link>
        )}
      </div>

      {/* What You'll Learn */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          What You'll Learn
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {tutorial.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {section.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {section.lessons.length}{" "}
                {section.lessons.length === 1
                  ? "lesson"
                  : "lessons"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Content */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Course Content
        </h2>

        <div className="mt-8 space-y-10">
          {tutorial.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {section.title}
              </h3>

              <div className="mt-3 divide-y divide-zinc-200 rounded-lg border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                {section.lessons.map((lesson, index) => (
                  <Link
                    key={lesson.slug}
                    href={`/learn/${tutorial.slug}/${lesson.slug}`}
                    className="flex items-center gap-4 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {index + 1}
                    </span>

                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {lesson.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}