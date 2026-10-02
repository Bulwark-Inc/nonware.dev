import Link from "next/link";
import { tutorials } from "@/lib/learn";

export default function LearnPage() {
  const tutorialList = Object.values(tutorials);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Learn
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Learn by building real things.
        </h1>

        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Practical tutorials and guides that help you understand
          modern development by actually building things.
        </p>
      </div>

      {/* Tutorials */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Tutorials
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutorialList.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/learn/${tutorial.slug}`}
              className="group rounded-xl border border-zinc-200 p-6 transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {tutorial.title.replace(" Tutorial", "")}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {tutorial.description}
              </p>

              <span className="mt-5 inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Start learning →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}