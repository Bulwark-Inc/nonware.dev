import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
            >
              DevLearn
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Practical tutorials, guides and projects for
              developers who want to build real things.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Learn
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/learn" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  Tutorials
                </Link>
              </li>

              <li>
                <Link href="/learn/nextjs" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  Next.js
                </Link>
              </li>

              <li>
                <Link href="/learn/javascript" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  JavaScript
                </Link>
              </li>
            </ul>
          </div>

          {/* Build */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Build
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/projects" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/guides" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  Guides
                </Link>
              </li>

              <li>
                <Link href="/resources" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Community
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href="#"
                  className="hover:text-zinc-950 dark:hover:text-zinc-100"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-zinc-950 dark:hover:text-zinc-100"
                >
                  X
                </a>
              </li>

              <li>
                <Link href="/about" className="hover:text-zinc-950 dark:hover:text-zinc-100">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevLearn. All rights reserved.</p>

          <p>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}