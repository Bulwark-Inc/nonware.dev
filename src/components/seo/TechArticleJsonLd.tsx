import { getSiteUrl } from "@/lib/urls";

type TechArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  tutorialTitle: string;
  tutorialUrl: string;
};

export default function TechArticleJsonLd({
  title,
  description,
  url,
  tutorialTitle,
  tutorialUrl,
}: TechArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Nonware.dev",
      url: getSiteUrl(),
    },
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: tutorialTitle,
      url: tutorialUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}