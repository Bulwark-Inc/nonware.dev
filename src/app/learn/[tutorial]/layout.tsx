import type { Metadata } from "next";

import { notFound } from "next/navigation";

import TutorialSidebar from "@/components/learn/LearnSidebar";
import TutorialMobileNav from "@/components/learn/LearnMobileNav";

import { tutorials } from "@/lib/learn";
import { getTutorialUrl } from "@/lib/urls";

type TutorialLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    tutorial: string;
  }>;
};

export async function generateMetadata({
  params,
}: TutorialLayoutProps): Promise<Metadata> {
  const { tutorial: tutorialSlug } = await params;
  const tutorial = tutorials[tutorialSlug];

  if (!tutorial) {
    return {};
  }

  const tutorialUrl = getTutorialUrl(tutorial.slug);

  return {
    title: tutorial.title,
    description: tutorial.description,

    alternates: {
      canonical: tutorialUrl,
    },

    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
      url: tutorialUrl,
      siteName: "Nonware.dev",
      type: "website",
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

export default async function TutorialLayout({
  children,
  params,
}: TutorialLayoutProps) {
  const { tutorial: tutorialSlug } = await params;
  const tutorial = tutorials[tutorialSlug];

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="flex min-h-full">
      <TutorialSidebar tutorial={tutorial} />

      <div className="min-w-0 flex-1">
        <TutorialMobileNav tutorial={tutorial} />

        <main>{children}</main>
      </div>
    </div>
  );
}