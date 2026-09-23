"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TutorialLessonLinkProps = {
  href: string;
  title: string;
};

export default function TutorialLessonLink({
  href,
  title,
}: TutorialLessonLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-zinc-900 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      }`}
    >
      {title}
    </Link>
  );
}