"use client";

import Link from "next/link";
import { ChevronRight, X } from "lucide-react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Learn", href: "/learn" },
  { label: "Guides", href: "/guides" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export default function MobileNav({
  open,
  onClose,
}: MobileNavProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform duration-300 dark:bg-zinc-950 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-5 dark:border-zinc-800">
          <Link
            href="/"
            onClick={onClose}
            className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            DevLearn
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <span>{link.label}</span>

                {["Learn", "Guides", "Projects", "Resources"].includes(
                  link.label
                ) && (
                  <ChevronRight className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer Bottom */}
        <div className="absolute bottom-0 left-0 w-full border-t border-zinc-200 p-5 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Learn. Build. Deploy.
          </p>
        </div>
      </aside>
    </>
  );
}