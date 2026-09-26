import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import { getSiteUrl } from "@/lib/urls";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),

  title: {
    default: "Nonware.dev",
    template: "%s | Nonware.dev",
  },

  description:
    "Practical tutorials, guides and projects for developers.",

  openGraph: {
    siteName: "Nonware.dev",
    type: "website",
    locale: "en_US",
    title: "Nonware.dev",
    description:
      "Practical tutorials, guides and projects for developers.",
    url: getSiteUrl(),

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

function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nonware.dev",
    url: getSiteUrl(),
    description:
      "Practical tutorials, guides and projects for developers.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <WebsiteJsonLd />

        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>

          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}