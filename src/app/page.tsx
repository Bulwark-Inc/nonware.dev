import type { Metadata } from "next";

import Link from "next/link";

import { getSiteUrl } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Nonware.dev | Learn. Build. Deploy.",
  description:
    "Practical tutorials, guides, and projects for developers who want to learn by building, deploying, and understanding real development workflows.",
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    title: "Nonware.dev | Learn. Build. Deploy.",
    description:
      "Practical tutorials, guides, and projects for developers.",
    url: getSiteUrl(),
    siteName: "Nonware.dev",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:py-20">
      {/* Hero */}
      <section className="mb-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Learn. Build. Deploy.
        </p>

        <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
          Practical tutorials for developers who want to{" "}
          <span className="text-primary">build real things.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Welcome to <strong className="text-foreground">Nonware.dev</strong> —
          a practical learning platform for developers who want to understand
          modern web development by actually doing it.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
          Learn the tools, understand the concepts, follow practical examples,
          and build applications from the ground up.
        </p>

        <p className="mx-auto mt-7 max-w-2xl text-xl font-semibold leading-8">
          Start with the basics. Build something real. Take it all the way to
          production.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/learn"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start Learning
          </Link>

          <Link
            href="/guides"
            className="rounded-lg border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Need a Guide? Start Here
          </Link>
        </div>
      </section>

      {/* Learn by doing */}
      <section className="mb-24 rounded-2xl border bg-muted/30 p-8 sm:p-10 lg:p-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Learn by doing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Learning should lead to action.
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              Learning to code shouldn&apos;t mean spending hours reading
              documentation without knowing what to do next.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Nonware.dev takes a practical, step-by-step approach to learning
              modern development.
            </p>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Understanding",
                  "Learn what a technology does and why it matters.",
                ],
                [
                  "02",
                  "Following",
                  "Work through clear, practical instructions and examples.",
                ],
                [
                  "03",
                  "Building",
                  "Apply what you have learned to real projects.",
                ],
                [
                  "04",
                  "Deploying",
                  "Take your applications beyond your computer and put them online.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-xl border bg-background p-6"
                >
                  <span className="text-sm font-bold text-primary">
                    {number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto rounded-xl border bg-background p-5">
              <div className="flex min-w-max items-center justify-center gap-3 py-3 text-sm font-semibold">
                {["LEARN", "UNDERSTAND", "BUILD", "DEPLOY", "REPEAT"].map(
                  (item, index, items) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="rounded-lg border px-4 py-2">
                        {item}
                      </span>

                      {index < items.length - 1 && (
                        <span className="text-muted-foreground">→</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold leading-8">
          The goal isn&apos;t to help you memorize tutorials.
          <br />
          <span className="text-primary">
            The goal is to help you become comfortable building things
            yourself.
          </span>
        </p>
      </section>

      {/* Start here */}
      <section className="mb-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Start here
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Build your foundation.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
            New to modern web development? Start with the fundamentals and
            gradually work your way toward building and deploying real
            applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              number: "01",
              title: "Getting Started",
              description:
                "Learn the tools and concepts you need before building your first application.",
              items: [
                "Set up your development environment",
                "Install Node.js",
                "Install VS Code",
                "Understand the command line",
                "Create your first project",
              ],
              href: "/learn",
              action: "Start learning",
            },
            {
              number: "02",
              title: "Learn Next.js",
              description:
                "Build modern web applications with Next.js through practical, beginner-friendly tutorials.",
              items: [
                "Project structure",
                "Pages and layouts",
                "Components",
                "Routing",
                "Styling",
                "Data fetching",
                "Production builds",
              ],
              href: "/learn/nextjs",
              action: "Explore Next.js",
            },
            {
              number: "03",
              title: "Git & GitHub",
              description:
                "Learn how developers manage, track, and share their code.",
              items: [
                "Create repositories",
                "Track changes",
                "Make commits",
                "Work with branches",
                "Push projects to GitHub",
              ],
              href: "/learn",
              action: "Learn Git",
            },
            {
              number: "04",
              title: "Docker",
              description:
                "Understand containers and learn how to package applications for deployment.",
              items: [
                "Install Docker",
                "Create Dockerfiles",
                "Build images",
                "Run containers",
                "Tag images",
                "Work with container registries",
              ],
              href: "/learn",
              action: "Learn Docker",
            },
          ].map((path) => (
            <div
              key={path.number}
              className="rounded-2xl border p-7 transition-colors hover:bg-muted/30"
            >
              <span className="text-sm font-bold text-primary">
                {path.number}
              </span>

              <h3 className="mt-3 text-2xl font-semibold">{path.title}</h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {path.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {path.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <Link
                href={path.href}
                className="mt-7 inline-block text-sm font-semibold text-primary hover:underline"
              >
                {path.action} →
              </Link>
            </div>
          ))}
        </div>

        {/* Cloud & Deployment */}
        <div className="mt-6 rounded-2xl border bg-muted/30 p-7">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <span className="text-sm font-bold text-primary">05</span>

              <h3 className="mt-3 text-2xl font-semibold">
                Cloud &amp; Deployment
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Take your application from your computer to the internet.
                Learn how applications are packaged, shipped, deployed, and
                maintained in the cloud.
              </p>
            </div>

            <div>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                <li>• Cloud projects</li>
                <li>• Container registries</li>
                <li>• Authentication</li>
                <li>• Cloud Run</li>
                <li>• Production deployments</li>
                <li>• Logs and monitoring</li>
              </ul>

              <Link
                href="/learn"
                className="mt-7 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Learn deployment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="mb-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Explore learning paths
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Learn toward a practical outcome.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
            Instead of learning isolated technologies, follow a path that
            connects concepts and takes you toward something you can actually
            build.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Next.js",
              description:
                "Build modern web applications from the ground up.",
              detail:
                "Begin with your first Next.js project and gradually progress toward more advanced application development.",
              href: "/learn/nextjs",
            },
            {
              title: "Git & GitHub",
              description:
                "Learn the version-control workflow used to manage real projects.",
              detail:
                "Go from your first repository to confidently tracking and publishing your work.",
              href: "/learn",
            },
            {
              title: "Docker",
              description: "Understand containers by actually using them.",
              detail:
                "Learn how to package applications and prepare them for deployment.",
              href: "/learn",
            },
            {
              title: "Cloud & Deployment",
              description:
                "Learn what happens after your application works locally.",
              detail:
                "Understand the journey from local development to a live production application.",
              href: "/learn",
            },
          ].map((path) => (
            <div key={path.title} className="rounded-2xl border p-7">
              <h3 className="text-2xl font-semibold">{path.title}</h3>

              <p className="mt-3 text-lg leading-7 text-foreground">
                {path.description}
              </p>

              <p className="mt-3 leading-7 text-muted-foreground">
                {path.detail}
              </p>

              <Link
                href={path.href}
                className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Start the {path.title} path →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Build something real */}
      <section className="mb-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Build something real
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Reading is useful. Building is better.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
            Practical projects help turn concepts into working applications.
            Build while you learn and use each project to reinforce what you
            already know.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Build a Portfolio",
              description:
                "Create a professional developer portfolio while learning modern web development.",
            },
            {
              title: "Build a Blog",
              description:
                "Build a real content-driven application and learn how different parts of a web application work together.",
            },
            {
              title: "Build a Full-Stack Application",
              description:
                "Bring frontend, backend, data, and deployment concepts together in one project.",
            },
          ].map((project) => (
            <div key={project.title} className="rounded-2xl border p-7">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {project.description}
              </p>

              <Link
                href="/projects"
                className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
              >
                View project →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured guide */}
      <section className="mb-24 rounded-2xl border p-8 sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Featured guide
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          From local development to a live application.
        </h2>

        <p className="mt-4 text-xl font-semibold">
          A 7-day journey to deploy a Next.js application to Google Cloud.
        </p>

        <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
          You&apos;ve created your application. It works perfectly on your
          computer. Now what?
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
          This practical guide walks through the journey from local development
          to a live application on the internet.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Next.js",
            "Git",
            "GitHub",
            "Docker",
            "Google Cloud",
            "Artifact Registry",
            "Cloud Run",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border bg-muted px-4 py-2 text-sm font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Create a production-ready Next.js application",
            "Manage the project with Git",
            "Publish your code to GitHub",
            "Containerize the application with Docker",
            "Create a Google Cloud project",
            "Store your Docker image in Artifact Registry",
            "Deploy the application to Cloud Run",
            "Update and redeploy the application",
            "Understand revisions and production deployments",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 text-primary">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Link
          href="/learn"
          className="mt-9 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Explore the 7-Day Deployment Guide →
        </Link>
      </section>

      {/* Practical tutorials */}
      <section className="mb-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Practical tutorials
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Clear explanations. Real results.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
            Every tutorial is designed to answer the questions that matter
            when you&apos;re actually trying to build something.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "What am I doing?",
              "Understand the concept before blindly copying commands.",
            ],
            [
              "What do I need?",
              "Know the tools, software, and prerequisites before you begin.",
            ],
            [
              "What should I type?",
              "Follow clear commands and complete examples.",
            ],
            [
              "What should I see?",
              "Expected output helps you know whether you are on the right track.",
            ],
            [
              "What if something goes wrong?",
              "Learn about common problems and how to troubleshoot them.",
            ],
            [
              "What happens next?",
              "Follow the learning path instead of wondering where to go after finishing a tutorial.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border p-7">
              <h3 className="text-lg font-semibold">{title}</h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Growing library */}
      <section className="mb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              A growing library for developers
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Learn today. Keep learning tomorrow.
            </h2>
          </div>

          <p className="leading-8 text-muted-foreground">
            Nonware.dev is being built as a continuously growing collection of
            practical development resources. Explore focused tutorials,
            longer guides, hands-on projects, and useful reference material.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Tutorials",
              "Focused lessons that teach specific technologies and tasks.",
            ],
            [
              "Guides",
              "Longer learning paths that combine multiple concepts into one practical journey.",
            ],
            [
              "Projects",
              "Hands-on applications designed to help you put your knowledge into practice.",
            ],
            [
              "Reference",
              "Quick access to commands, configurations, and useful development information.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border p-7">
              <h3 className="text-xl font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-24 rounded-2xl bg-muted/30 p-8 sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Nonware.dev philosophy
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Don&apos;t just learn it. Build it.
          </h2>

          <div className="mt-7 space-y-5 leading-8 text-muted-foreground">
            <p>
              You don&apos;t need to know everything before you start.
            </p>

            <p>
              You don&apos;t need to understand every tool.
            </p>

            <p>
              You don&apos;t need to be an expert.
            </p>

            <p>
              Start with one tutorial. Run one command. Build one small thing.
              Then build something a little bigger.
            </p>
          </div>

          <p className="mt-8 text-xl font-semibold">
            Over time, those small steps become{" "}
            <span className="text-primary">real development skills.</span>
          </p>

          <p className="mt-4 font-medium">
            That&apos;s what Nonware.dev is here for.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Ready to start?
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Start building today.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
          Explore the tutorials, follow a learning path, and build something of
          your own.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/learn"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start Learning
          </Link>

          <Link
            href="/projects"
            className="rounded-lg border px-7 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            or Follow a Project
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-2xl font-bold">Welcome to Nonware.dev.</p>

          <p className="mt-2 text-lg font-semibold text-primary">
            Learn. Build. Deploy.
          </p>
        </div>
      </section>
    </main>
  );
}