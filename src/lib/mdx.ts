export async function getLessonContent(
  tutorialSlug: string,
  lessonSlug: string
) {
  const mdxmodule = await import(
    `@/content/learn/${tutorialSlug}/${lessonSlug}.mdx`
  );

  return mdxmodule.default;
}