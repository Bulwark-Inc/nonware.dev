"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    // Intentionally tracks client hydration for next-themes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9" />
    );
  }

  const currentTheme = theme ?? "system";

  const Icon =
    currentTheme === "light"
      ? Sun
      : currentTheme === "dark"
        ? Moon
        : Monitor;

  function selectTheme(value: string) {
    setTheme(value);
    setOpen(false);
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      >
        <Icon className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-36 rounded-lg border border-zinc-200 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          <button
            type="button"
            onClick={() => selectTheme("light")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition ${
              currentTheme === "light"
                ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100"
                : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            <Sun className="h-4 w-4" />
            <span>Light</span>
          </button>

          <button
            type="button"
            onClick={() => selectTheme("dark")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition ${
              currentTheme === "dark"
                ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100"
                : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            <Moon className="h-4 w-4" />
            <span>Dark</span>
          </button>

          <button
            type="button"
            onClick={() => selectTheme("system")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition ${
              currentTheme === "system"
                ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100"
                : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            <Monitor className="h-4 w-4" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
}