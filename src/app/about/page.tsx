import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/urls";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "About Nonware.dev",
  description:
    "Learn about Nonware.dev, a practical learning platform for developers who want to learn by building, deploying, and understanding real development workflows.",
  alternates: {
    canonical: `${getSiteUrl()}/about`,
  },
  openGraph: {
    title: "About Nonware.dev",
    description:
      "Practical learning for developers who want to build, not just read.",
    url: `${getSiteUrl()}/about`,
    siteName: "Nonware.dev",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:py-20">
      {/* Hero */}
      <section className="mb-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          About Nonware.dev
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Practical learning for developers who want to{" "}
          <span className="text-primary">build, not just read.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          Nonware.dev is a practical learning platform for developers who want
          to understand how modern applications are built, developed, and
          deployed.
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-xl font-semibold">
          From &quot;I don&apos;t know how this works&quot; to
          <br />
          <span className="text-primary">
            &quot;I built it myself.&quot;
          </span>
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Nonware.dev?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Making the pieces fit together.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Modern web development can feel overwhelming. There are
              frameworks, programming languages, package managers, Git, Docker,
              cloud platforms, databases, deployment systems, configuration
              files, environment variables, and countless tools to learn.
            </p>

            <p>
              It is easy to find documentation for individual technologies.
              What is often harder is finding a clear path that shows you{" "}
              <strong className="text-foreground">
                how everything fits together.
              </strong>
            </p>

            <p>
              That&apos;s what Nonware.dev is built to provide.
            </p>

            <p>
              Instead of simply explaining what a technology is, our tutorials
              focus on how you can actually use it, connect it to other tools,
              solve problems, and take what you build from your local computer
              to a live application.
            </p>
          </div>
        </div>
      </section>

      {/* Learn by building */}
      <section className="mb-20 rounded-2xl border bg-muted/30 p-8 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Learn by building
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Practical outcomes over endless theory.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            You shouldn&apos;t have to read dozens of pages of theory before
            doing something useful. Nonware.dev tutorials are designed around
            practical outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["01", "Understand", "Learn what you are actually doing."],
            ["02", "Build", "Create and modify something yourself."],
            ["03", "Run", "Execute commands and test your work."],
            ["04", "Understand the result", "See what happened and why."],
            ["05", "Troubleshoot", "Learn how to approach common problems."],
            ["06", "Move forward", "Connect what you learned to the next step."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-xl border bg-background p-6"
            >
              <span className="text-sm font-bold text-primary">{number}</span>

              <h3 className="mt-3 text-lg font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Who it&apos;s for
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Beginners, learners, and developers building real things.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Nonware.dev is primarily designed for beginner and early-stage
              developers, but the tutorials can also serve as quick references
              for more experienced developers.
            </p>

            <p>
              You may be completely new to a technology. You may have followed
              tutorials before but still struggle to understand how the pieces
              connect. Or you may simply want a practical reference while
              working on your own project.
            </p>

            <blockquote className="border-l-4 border-primary pl-5 text-lg font-medium text-foreground">
              You shouldn&apos;t need to already be an expert to follow a
              beginner tutorial.
            </blockquote>
          </div>
        </div>
      </section>

      {/* What you can learn */}
      <section className="mb-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What you can learn
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Modern development, from code to production.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">
              Next.js &amp; Web Development
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Learn how modern web applications are structured, developed,
              styled, built, and deployed.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Applications and project structure</li>
              <li>• Pages, layouts, and components</li>
              <li>• Routing and styling</li>
              <li>• Data fetching</li>
              <li>• Production builds</li>
              <li>• Deployment</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">Git &amp; GitHub</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Understand the practical version-control workflow used to manage
              and collaborate on software projects.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Repositories and commits</li>
              <li>• Staging and changes</li>
              <li>• Branches</li>
              <li>• GitHub</li>
              <li>• Pushing and updating projects</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">Docker</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Learn containerization from the perspective of actually using
              Docker in a development and deployment workflow.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Containers</li>
              <li>• Dockerfiles</li>
              <li>• Images</li>
              <li>• Ports</li>
              <li>• Image tagging</li>
              <li>• Container registries</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">Cloud &amp; Deployment</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Understand how an application moves from your local development
              environment to a live production environment.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Cloud projects</li>
              <li>• Authentication</li>
              <li>• Container registries</li>
              <li>• Environment variables</li>
              <li>• Production deployments</li>
              <li>• Logs and monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning formats */}
      <section className="mb-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Learning formats
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tutorials. Guides. Projects.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">Tutorials</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Focused lessons designed to help you understand and complete a
              specific concept or task.
            </p>
          </div>

          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">Guides</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Longer learning journeys that combine multiple technologies and
              concepts into one practical workflow.
            </p>
          </div>

          <div className="rounded-2xl border p-7">
            <h3 className="text-xl font-semibold">Projects</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Practical projects that bring different technologies together to
              create something tangible.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mb-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The bigger picture
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From local development to production.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
            Learning shouldn&apos;t stop when an application works on your
            computer. A developer&apos;s journey often connects many different
            tools and stages.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border bg-muted/30 p-6">
          <div className="flex min-w-max items-center justify-center gap-3 py-8 text-sm font-semibold">
            {[
              "IDEA",
              "CODE",
              "LOCAL DEVELOPMENT",
              "VERSION CONTROL",
              "CONTAINERIZATION",
              "CLOUD",
              "DEPLOYMENT",
              "LIVE APPLICATION",
            ].map((item, index, items) => (
              <div key={item} className="flex items-center gap-3">
                <span className="rounded-lg border bg-background px-4 py-3">
                  {item}
                </span>

                {index < items.length - 1 && (
                  <span className="text-muted-foreground">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-muted-foreground">
          Suddenly, concepts that initially seemed unrelated become parts of
          the same development workflow. Nonware.dev aims to make that
          connection easier to understand.
        </p>
      </section>

      {/* 7 Day Guide */}
      <section className="mb-20 rounded-2xl border p-8 sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          A practical example
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          The 7-Day Deployment Guide
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
          One of the projects that helped shape the idea behind Nonware.dev is
          a practical deployment guide designed to take a beginner from a local
          Next.js application to a live application on Google Cloud.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Next.js",
            "Node.js",
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

        <p className="mt-8 max-w-3xl leading-8 text-muted-foreground">
          The purpose isn&apos;t simply to provide a list of commands. It is to show
          how these technologies connect as part of one real deployment
          workflow.
        </p>
      </section>

      {/* Documentation philosophy */}
      <section className="mb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Concept → Example → Practice → Result
          </h2>

          <p className="mt-6 leading-8 text-muted-foreground">
            First understand what you&apos;re doing. Then see an example.
            Perform the task yourself. Finally, understand the result.
          </p>

          <p className="mt-5 leading-8 text-muted-foreground">
            Real development involves errors, configuration problems, confusing
            messages, and situations where something doesn&apos;t work on the
            first attempt. Understanding how to work through those situations
            is part of becoming a developer.
          </p>
        </div>
      </section>

      {/* Continuous learning */}
      <section className="mb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Built for continuous learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A resource that grows with modern development.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>
              Technology changes quickly. Frameworks evolve, tools change, cloud
              platforms introduce new features, and best practices develop over
              time.
            </p>

            <p>
              For that reason, Nonware.dev is intended to grow continuously.
              New tutorials, projects, guides, and reference material can be
              added as the platform develops.
            </p>

            <p>
              The goal isn&apos;t to create a static collection of articles.
              It is to build a learning resource that grows alongside modern
              development.
            </p>
          </div>
        </div>
      </section>

        {/* Contact */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6">
            <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Get in touch
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Have a question or want to reach out?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Have more questions, feedback, or simply want to get in touch?
                Drop a message below and I&apos;ll get back to you.
            </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
            </div>
        </div>
        </section>

      {/* Vision */}
      <section className="mb-20">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground sm:px-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Where we&apos;re going
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            From practical web development to broader developer learning.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 opacity-90">
            Nonware.dev starts with practical web development, but the
            long-term vision is broader.
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {[
              "Frontend Development",
              "Backend Development",
              "Full-Stack Development",
              "Cloud Deployment",
              "DevOps Fundamentals",
              "Developer Tools",
              "Software Projects",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Start learning. Start building.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
          Start with a tutorial. Follow the steps. Run the commands. Build
          something. Break something. Figure out why it broke. Fix it. Then
          build something else.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium">
          That&apos;s how development becomes something you understand rather
          than something you simply read about.
        </p>

        <div className="mt-10">
          <p className="text-2xl font-bold">Welcome to Nonware.dev.</p>

          <p className="mt-2 text-lg font-medium text-primary">
            Learn. Build. Deploy.
          </p>
        </div>
      </section>
    </main>
  );
}
