import { notFound } from "next/navigation";
import TutorialSidebar from "@/components/learn/LearnSidebar";
import TutorialMobileNav from "@/components/learn/LearnMobileNav";
import { tutorials } from "@/lib/learn";

type TutorialLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    tutorial: string;
  }>;
};

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