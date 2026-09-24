import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { tutorials } from "@/lib/learn";
import { getLessonContent } from "@/lib/mdx";

import {
  getSiteUrl,
  getLearnUrl,
  getLessonUrl,
  getTutorialUrl,
} from "@/lib/urls";

import Breadcrumbs from "@/components/learn/Breadcrumbs";
import BackToTutorial from "@/components/learn/BackToLearn";
import LessonNavigation from "@/components/content/LessonNavigation";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import TechArticleJsonLd from "@/components/seo/TechArticleJsonLd";

type LessonPageProps = {
  params: Promise<{
    tutorial: string;
    lesson: string;
  }>;
};

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const {
    tutorial: tutorialSlug,
    lesson: lessonSlug,
  } = await params;

  const tutorial = tutorials[tutorialSlug];

  if (!tutorial) {
    return {};
  }

  const lessons = tutorial.sections.flatMap(
    (section) => section.lessons
  );

  const lesson = lessons.find(
    (item) => item.slug === lessonSlug
  );

  if (!lesson) {
    return {};
  }

  const lessonUrl = getLessonUrl(
    tutorial.slug,
    lesson.slug
  );

  const lessonTitle =
    lesson.seo?.title ?? lesson.title;

  const lessonDescription =
    lesson.seo?.description ??
    `Learn ${lesson.title} with practical tutorials and examples on Nonware.dev.`;

  return {
    title: `${lessonTitle} | Nonware.dev`,

    description: lessonDescription,

    alternates: {
      canonical: lessonUrl,
    },

    openGraph: {
      title: lessonTitle,
      description: lessonDescription,
      url: lessonUrl,
      siteName: "Nonware.dev",
      type: "article",

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Nonware.dev - Practical Developer Tutorials",
        },
      ],
    },
  };
}

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

  const tutorialUrl = getTutorialUrl(tutorial.slug);

  const lessonUrl = getLessonUrl(
    tutorial.slug,
    lesson.slug
  );

  const lessonTitle =
    lesson.seo?.title ?? lesson.title;

  const lessonDescription =
    lesson.seo?.description ??
    `Learn ${lesson.title} with practical tutorials and examples on Nonware.dev.`;

  return (
    <>
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
            url: tutorialUrl,
          },
          {
            name: lesson.title,
            url: lessonUrl,
          },
        ]}
      />

      <TechArticleJsonLd
        title={lessonTitle}
        description={lessonDescription}
        url={lessonUrl}
        tutorialTitle={tutorial.title}
        tutorialUrl={tutorialUrl}
      />

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
    </>
  );
}