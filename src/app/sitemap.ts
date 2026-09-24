import type { MetadataRoute } from "next";

import { tutorials } from "@/lib/learn";

import {
  getSiteUrl,
  getLearnUrl,
  getTutorialUrl,
  getLessonUrl,
} from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const tutorialUrls = Object.values(tutorials).flatMap(
    (tutorial) => {
      const tutorialUrl = {
        url: getTutorialUrl(tutorial.slug),
        lastModified: new Date(),
      };

      const lessonUrls = tutorial.sections.flatMap(
        (section) =>
          section.lessons.map((lesson) => ({
            url: getLessonUrl(
              tutorial.slug,
              lesson.slug
            ),
            lastModified: new Date(),
          }))
      );

      return [tutorialUrl, ...lessonUrls];
    }
  );

  return [
    {
      url: getSiteUrl(),
      lastModified: new Date(),
    },
    {
      url: getLearnUrl(),
      lastModified: new Date(),
    },
    ...tutorialUrls,
  ];
}