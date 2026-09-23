import type { MDXComponents } from "mdx/types";

import { useMDXComponents as getContentComponents } from "@/components/content/MDXComponents";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return getContentComponents(components);
}