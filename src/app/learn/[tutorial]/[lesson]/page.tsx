import { notFound } from "next/navigation";

import { tutorials } from "@/lib/learn";
import { getLessonContent } from "@/lib/mdx";

import Breadcrumbs from "@/components/learn/Breadcrumbs";
import BackToTutorial from "@/components/learn/BackToLearn";
import LessonNavigation from "@/components/content/LessonNavigation";

type LessonPageProps = {
  params: Promise<{
    tutorial: string;
    lesson: string;
  }>;
};

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const {
    tutorial: tutorialSlug,
    lesson: lessonSlug,
  } = await params;

  const tutorial = tutorials[tutorialSlug];

  if (!tutorial) {
    notFound();
  }

  const lessons = tutorial.sections.flatMap(
    (section) => section.lessons
  );

  const lesson = lessons.find(
    (item) => item.slug === lessonSlug
  );

  if (!lesson) {
    notFound();
  }

  const currentIndex = lessons.findIndex(
    (item) => item.slug === lessonSlug
  );

  const previous =
    currentIndex > 0
      ? lessons[currentIndex - 1]
      : undefined;

  const next =
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : undefined;

  let LessonContent;

  try {
    LessonContent = await getLessonContent(
      tutorialSlug,
      lessonSlug
    );
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:py-14">
      <Breadcrumbs
        tutorial={tutorial}
        lesson={lesson}
      />

      <BackToTutorial tutorial={tutorial} />

      <div className="prose-container">
        <LessonContent />
      </div>

      <LessonNavigation
        tutorialSlug={tutorialSlug}
        previous={previous}
        next={next}
      />
    </article>
  );
}