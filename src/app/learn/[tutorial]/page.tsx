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

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
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

      <p className="text-sm font-medium text-zinc-500">
        Tutorial
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {tutorial.title}
      </h1>

      <p className="mt-4 text-lg text-zinc-600">
        Learn {tutorial.title} step by step.
      </p>
    </div>
  );
}