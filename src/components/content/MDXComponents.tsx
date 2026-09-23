import type { MDXComponents } from "mdx/types";

import CodeBlock from "./CodeBlock";
import Terminal from "./Terminal";
import ExpectedOutput from "./ExpectedOutput";
import Tip from "./Tip";
import Note from "./Note";
import Screenshot from "./Screenshot";
import Diagram from "./Diagram";
import Warning from "./Warning";
import Quiz from "./Quiz";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    ...components,

    h1: ({ children }) => (
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mb-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="pl-1">
        {children}
      </li>
    ),

    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
      >
        {children}
      </a>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-zinc-300 pl-4 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
        {children}
      </blockquote>
    ),

    hr: () => (
      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />
    ),

    CodeBlock,
    Terminal,
    ExpectedOutput,
    Tip,
    Note,
    Screenshot,
    Diagram,
    Warning,
    Quiz,
  };
}