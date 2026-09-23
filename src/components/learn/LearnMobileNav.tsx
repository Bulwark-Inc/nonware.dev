"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

import type { Tutorial } from "@/lib/learn";

type TutorialMobileNavProps = {
  tutorial: Tutorial;
};

export default function TutorialMobileNav({
  tutorial,
}: TutorialMobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          {tutorial.title}
        </span>

        {open ? (
          <ChevronUp className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        )}
      </button>

      {open && (
        <nav className="border-t border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="space-y-6">
            {tutorial.sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                  {section.title}
                </h3>

                <div className="space-y-1">
                  {section.lessons.map((lesson) => (
                    <Link
                      key={lesson.slug}
                      href={`/learn/${tutorial.slug}/${lesson.slug}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    >
                      {lesson.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}